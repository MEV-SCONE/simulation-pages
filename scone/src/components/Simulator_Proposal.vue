<script>
import { getBlockNum, getBlocks } from "../assets/js/data.js";
const MAX_BLOCK = 100;
const MIN_BLOCK = 0;

export default {
  data() {
    return {
      blockIndex: getBlockNum(),
      blocks: getBlocks(),
    };
  },
  methods: {
    getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    },
    addBlock() {
      if (this.blockIndex >= MAX_BLOCK) return;
      this.blocks.push({
        id: this.blockIndex++,
        validity: 1,
        fee: this.getRandomArbitrary(0, 10).toFixed(2),
        time: this.getRandomArbitrary(0.01, 0.4).toFixed(2),
      });
    },
    popBlock() {
      if (this.blockIndex <= MIN_BLOCK) return;
      this.blockIndex--;
      this.blocks.pop();
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
            <h3 class="uk-card-title uk-margin-remove-bottom">📥 Block Proposal Info</h3>
          </div>
        </div>
      </div>
      <div class="uk-card-body">
        <form class="uk-form-stacked uk-text-left">
          <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text"
              >Number of block proposals</label
            >
            <div class="uk-form-controls">
              <input
                readonly
                class="uk-input uk-form-width-medium"
                id="form-stacked-text"
                type="number"
                :value="this.blockIndex"
              />
              <a @click="addBlock()" class="icon uk-icon-link" uk-icon="plus-circle"></a>
              <a @click="popBlock()" class="icon uk-icon-link" uk-icon="minus-circle"></a>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div
      v-for="block in blocks.slice().reverse()"
      :key="block.id"
      class="uk-card uk-card-default uk-card-body"
    >
      <ul uk-accordion="multiple: true">
        <li class="uk-open">
          <a class="uk-accordion-title uk-card-title block-title"
            >Block #{{ block.id + 1 }}</a
          >
          <div class="uk-accordion-content">
            <form class="uk-form-horizontal uk-text-left">
              <div class="uk-margin">
                <div class="uk-form-label">Validity</div>
                <div class="uk-form-controls uk-form-controls-text">
                  <label
                    ><input
                      class="uk-radio"
                      type="radio"
                      v-model="block.validity"
                      name="radio1"
                      value="1"
                    />
                    Valid</label
                  ><br />
                  <label
                    ><input
                      class="uk-radio"
                      type="radio"
                      v-model="block.validity"
                      name="radio1"
                      value="0"
                    />
                    Invalid</label
                  >
                </div>
              </div>
              <div class="uk-margin">
                <label class="uk-form-label" for="form-horizontal-text"
                  >Fee amount(ETH)</label
                >
                <div class="uk-form-controls">
                  <input
                    class="uk-input"
                    id="form-horizontal-text"
                    type="number"
                    v-model="block.fee"
                  />
                </div>
              </div>
              <div class="uk-margin">
                <label class="uk-form-label" for="form-horizontal-text"
                  >Simulation time required(ms)</label
                >
                <div class="uk-form-controls">
                  <input
                    class="uk-input"
                    id="form-horizontal-text"
                    type="number"
                    v-model="block.time"
                  />
                </div>
              </div>
            </form>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.icon {
  padding: 0 0 0 5px;
}

.uk-card {
  box-shadow: 0 0 100px rgb(216, 216, 216, 0.5);
}
</style>
