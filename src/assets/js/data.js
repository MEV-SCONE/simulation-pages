/* environment variables */
let environment = { 'blockInterval': 1, 'optimalStoppingPercentage': 37, 'top_K': 1 };

/* block proposal info */
let blocks = [];

/* getter functions */
function getEnv() {
    return environment;
}

function getBlocks() {
    return blocks;
}

/* simulation functions */
function best_bids(proposals, top_k, check_validity = true, timeout = null) {
    let condition_v = Array(proposals.length).fill(true);
    let condition_t = Array(proposals.length).fill(true);

    if (check_validity) {
        condition_v = proposals.map(p => p.validity == 1);
    }

    if (timeout !== null) {
        condition_t = proposals.map(p => p.time <= timeout);
    }

    let ps = proposals.filter((_, i) => condition_v[i] && condition_t[i]);
    ps = ps.map(p => p.fee);
    ps.sort((a, b) => b - a);
    return ps.slice(0, Math.min(top_k, ps.length));
}

const errors = {
    ERR_NO_VALID_IN_REJECT : 0,
    ERR_TIMEOUT : 1,
    ERR_INVALID_LAST_ONE : 2,
    ERR_EMPTY : 3,
};

function pick(proposals, reject_percentage, check_validity = true, timeout = null) {
    let ps = [...proposals]; // clone the array
    if (ps.length === 0) return [false, errors.ERR_EMPTY];
    console.log("ps", ps);

    ps.sort(() => Math.random() - 0.5); // shuffle

    let stop = Math.floor(reject_percentage * ps.length / 100);

    if (stop < 1) {
        if (ps[0].validity == 1) {
            return [true, ps[0]];
        } else {
            return [false, errors.ERR_NO_VALID_IN_REJECT];
        }
    }

    let elapsed_time = ps.slice(0, stop).reduce((acc, p) => acc + p.time, 0);

    if (timeout !== null && elapsed_time > timeout) {
        return [false, errors.ERR_TIMEOUT];
    }

    if (check_validity) {
        const pre_validities = ps.slice(0, stop).map(p => p.validity == 1);
        if (!pre_validities.includes(true)) {
            return pick(ps.slice(stop), reject_percentage, check_validity);
        }

        var highest_bid_from_rejected = Math.max(
            ...ps.slice(0, stop).filter((_, i) => pre_validities[i]).map(p => p.fee)
        );
    } else {
        var highest_bid_from_rejected = Math.max(...ps.slice(0, stop).map(p => p.fee));
    }

    let rest_bid = ps.slice(stop).map(p => p.fee);

    if (timeout !== null) {
        let remain_time = timeout - elapsed_time;
        let rest_time_required = ps.slice(stop).map(p => p.time);

        for (let i = 0; i < rest_time_required.length; i++) {
            remain_time -= rest_time_required[i];
            if (remain_time < 0) {
                rest_bid = rest_bid.slice(0, i);
                break;
            }
        }
    }

    if (rest_bid.length === 0) {
        return [false, errors.ERR_TIMEOUT];
    }

    let ps_stop = ps.slice(stop, stop + rest_bid.length);

    if (check_validity) {
        let rest_validities = ps_stop.map(p => p.validity == 1);
        let best_idx = rest_bid.findIndex((bid, i) => (bid > highest_bid_from_rejected) && rest_validities[i])

        if (best_idx !== -1) {
            return [true, ps[stop + best_idx]];
        } else {
            if (rest_validities[rest_validities.length - 1]) {
                return [true, ps_stop[ps_stop.length - 1]];
            }
            else {
                return [false, errors.ERR_INVALID_LAST_ONE];
            }
        }
    } else {
        let best_idx = rest_bid.findIndex(bid => bid > highest_bid_from_rejected);

        if (best_idx !== -1) {
            return [true, ps[stop + best_idx]];
        } else {
            return [true, ps_stop[ps_stop.length - 1]];
        }
    }
}

function run() {
    let proposals = blocks;
    let reject_percentage = environment.optimalStoppingPercentage;
    let top_k = environment.top_K;
    let check_validity = true;
    let timeout = environment.blockInterval;

    const [pick_success, pick_result] = pick(proposals, reject_percentage, check_validity, timeout);
    const best_bid = best_bids(proposals, top_k, check_validity, timeout);

    //console.log("pick_success", pick_success);
    //console.log("pick_result", pick_result);
    console.log("best_bid", best_bid);

    if (pick_success && best_bid.includes(pick_result.fee))
        return [true, pick_success, pick_result];

    return [false, pick_success, pick_result]
}

export { getEnv, getBlocks, run };