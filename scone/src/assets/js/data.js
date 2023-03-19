/* environment variables */
let environment = { 'blockInterval': 1, 'optimalStoppingPercentage': 37, 'top_K': 1 };

/* block proposal info */
let blocks = [];

/* getter functions */
function getEnv() {
    return environment;
}

function getBlockNum() {
    return blocks.length;
}

function getBlocks() {
    return blocks;
}

export { getEnv, getBlockNum, getBlocks };