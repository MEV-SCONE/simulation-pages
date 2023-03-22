<script>
import { getEnv, getBlocks, run } from "../assets/js/data.js";

export default {
  data() {
    return {
      environment: getEnv(),
      blocks: getBlocks(),

      done: false,
      success: undefined,
      pick_success: undefined,
      pick_result: undefined,

      pick_result_validity: undefined,
      pick_result_fee: undefined,
      pick_result_time: undefined,
    };
  },
  computed: {},
  methods: {
    runSimulation() {
      [this.success, this.pick_success, this.pick_result] = run();
      console.log("success :", this.success);
      console.log("pick_success : ", this.pick_success);
      console.log("pick_result : ", this.pick_result); // proposal or ERR

      if (this.pick_success) {
        this.pick_result_validity = this.pick_result.validity;
        this.pick_result_fee = this.pick_result.fee;
        this.pick_result_time = this.pick_result.time;
      }
      this.done = true;
    },
    resetSimulation() {
      this.environment.blockInterval = 1;
      this.environment.optimalStoppingPercentage = 37;
      this.environment.top_K = 1;
      this.blocks.splice(0, this.blocks.length);

      this.done = false;
      this.success = undefined;
      this.pick_success = undefined;
      this.pick_result = undefined;

      this.pick_result_validity = undefined;
      this.pick_result_fee = undefined;
      this.pick_result_time = undefined;
    },
  },
};
</script>

<template>
  <div>
    <div class="uk-card uk-card-default">
      <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
          <div class="uk-width-expand">
            <h3 class="uk-card-title uk-margin-remove-bottom">🔍 Simulation Execution</h3>
          </div>
        </div>
      </div>
      <div class="uk-card-body">
        <div>
          <div class="uk-width-1-1">
            <button
              class="uk-button uk-button-primary uk-width-1-2@m"
              @click="runSimulation()"
              uk-tooltip="There are some random features in the simulation, so try multiple simulations
            (RUN many times)!"
            >
              Run
            </button>
            <button
              class="uk-button uk-button-danger uk-width-1-2@m"
              @click="resetSimulation()"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div v-if="done" class="uk-card-footer">
        <div v-if="success">
          <dt>Success!</dt>
          <dd>Optimal stop works.</dd>
        </div>
        <div v-else-if="pick_success">
          <dt>Fail!</dt>
          <dd>Not in Top-k. Choose the last proposal.</dd>
        </div>
        <div v-else>
          <dt>Error!</dt>
          <dd>Below Error Occured.</dd>
        </div>
      </div>
    </div>

    <div v-if="done" class="uk-card uk-card-default margin-top">
      <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
          <div class="uk-width-expand">
            <h3 class="uk-card-title uk-margin-remove-bottom">📄 Results</h3>
          </div>
        </div>
      </div>
      <div
        class="uk-card-body"
        :class="{
          'card-danger': !pick_success,
          'card-warning': pick_success && !success,
          'card-success': success,
        }"
      >
        <div v-if="!pick_success">
          <div v-if="pick_result === 0">
            <dt>Error Code #0 (ERR_NO_VALID_IN_REJECT)</dt>
            <dd>There is no valid proposal in reject list.</dd>
          </div>
          <div v-if="pick_result === 1">
            <dt>Error Code #1 (ERR_TIMEOUT)</dt>
            <dd>Timeout. Try increasing the block interval.</dd>
          </div>
          <div v-if="pick_result === 2">
            <dt>Error Code #2 (ERR_INVALID_LAST_ONE)</dt>
            <dd>Last proposal is not valid.</dd>
          </div>
          <div v-if="pick_result === 3">
            <dt>Error Code #3 (ERR_EMPTY)</dt>
            <dd>The proposal list is empty.</dd>
          </div>
        </div>
        <div v-else>
          <h3 class="uk-card-title block-title">Block #{{ pick_result.id + 1 }}</h3>
          <form class="uk-form-horizontal uk-text-left">
            <div class="uk-margin">
              <div class="uk-form-label">
                <span
                  class="tiny-padding-right"
                  uk-tooltip="represents the validity status of a block proposal."
                  >Validity</span
                >
              </div>
              <div class="uk-form-controls uk-form-controls-text">
                <label
                  ><input
                    class="uk-radio"
                    type="radio"
                    v-model="this.pick_result_validity"
                    name="radio1"
                    value="1"
                    onclick="return false;"
                  />
                  Valid</label
                ><br />
                <label
                  ><input
                    class="uk-radio"
                    type="radio"
                    v-model="this.pick_result_validity"
                    name="radio1"
                    value="0"
                    onclick="return false;"
                  />
                  Invalid</label
                >
              </div>
            </div>
            <div class="uk-margin">
              <label class="uk-form-label" for="form-horizontal-text"
                ><span
                  class="tiny-padding-right"
                  uk-tooltip="specifies the bid amount for a block proposal."
                  >Bid (ETH)</span
                ></label
              >
              <div class="uk-form-controls">
                <input
                  class="uk-input"
                  id="form-horizontal-text"
                  type="number"
                  v-model="this.pick_result_fee"
                  readonly
                />
              </div>
            </div>
            <div class="uk-margin">
              <label class="uk-form-label" for="form-horizontal-text"
                ><span
                  class="tiny-padding-right"
                  uk-tooltip="indicates the time required to simulate the block proposal."
                  >Simulation Time Required (ms)</span
                ></label
              >
              <div class="uk-form-controls">
                <input
                  class="uk-input"
                  id="form-horizontal-text"
                  type="number"
                  v-model="this.pick_result_time"
                  readonly
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.icon {
  padding: 0 0 0 5px;
}

.card-danger {
  background-color: #f0506e;
  color: white;
}

.card-success {
  background-color: #32d296;
}

.card-warning,
.card-warning .uk-form-label,
.card-warning h3,
.card-success,
.card-success .uk-form-label,
.card-success h3 {
  color: white !important;
}

.card-warning {
  background-color: #faa05a;
}
</style>
