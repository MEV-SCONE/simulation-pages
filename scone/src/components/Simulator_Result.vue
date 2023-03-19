<script>
import { getEnv, getBlocks } from "../assets/js/data.js";

export default {
  data() {
    return {
      environment: getEnv(),
      blocks: getBlocks(),
    };
  },
  computed: {},
  methods: {
    upateData() {
      this.environment = getEnv();
      this.blocks = getBlocks();
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
            <h3 class="uk-card-title uk-margin-remove-bottom">🔍 Simulation Results</h3>
          </div>
        </div>
      </div>
      <div class="uk-card-body">
        <div>
          <div class="uk-width-1-1">
            <button
              class="uk-button uk-button-primary uk-width-1-2@m"
              @click="upateData()"
            >
              Run
            </button>
            <button class="uk-button uk-button-danger uk-width-1-2@m">Reset</button>
          </div>
        </div>
      </div>
      <div class="uk-card-footer">
        Block Interval : {{ environment.blockInterval }} <br />
        Optimal stopping percentage : {{ environment.optimalStoppingPercentage }} <br />
        Selection criteria : {{ environment.top_K }} <br />
        Blocks : {{ blocks }}
      </div>
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
