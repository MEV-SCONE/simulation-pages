<script>
import { getBlocks } from "../assets/js/data.js";
const MAX_BLOCK = 100;
const MIN_BLOCK = 0;

export default {
  data() {
    return {
      blocks: getBlocks(),
    };
  },
  computed: {
    blockIndex: {
      get() {
        if (this.blocks === null) return 0;
        return this.blocks.length;
      },
    },
  },
  methods: {
    getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    },
    addBlock() {
      if (this.blockIndex >= MAX_BLOCK) return;
      this.blocks.push({
        id: this.blockIndex,
        validity: 1,
        fee: Math.round(this.getRandomArbitrary(0, 10) * 1e2) / 1e2,  // 30
        time: Math.round(this.getRandomArbitrary(0.01, 0.4) * 1e2) / 1e2,
      });
    },
    popBlock() {
      if (this.blockIndex <= MIN_BLOCK) return;
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
              ><span
                class="tiny-padding-right"
                uk-tooltip="indicates the total number of block proposals (candidates) in this block interval that will be simulated by relays/validators."
                >Number of Block Proposals</span
              ></label
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
      class="uk-card uk-card-default uk-card-body margin-top"
    >
      <ul uk-accordion="multiple: true">
        <li class="uk-open">
          <a class="uk-accordion-title uk-card-title block-title"
            >Block #{{ block.id + 1 }}</a
          >
          <div class="uk-accordion-content">
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
                  ><span class="tiny-padding-right" uk-tooltip="specifies the bid amount for a block proposal."
                    >Bid (ETH)</span
                  ></label
                >
                <div class="uk-form-controls">
                  <input
                    class="uk-input"
                    id="form-horizontal-text"
                    type="number"
                    v-model="block.fee"
                    min="0"
                  />
                </div>
              </div>
              <div class="uk-margin">
                <label class="uk-form-label" for="form-horizontal-text"
                  ><span class="tiny-padding-right" uk-tooltip="indicates the time required to simulate the block proposal."
                    >Simulation Time Required (sec)</span></label
                >
                <div class="uk-form-controls">
                  <input
                    class="uk-input"
                    id="form-horizontal-text"
                    type="number"
                    v-model="block.time"
                    min="0"
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
</style>
