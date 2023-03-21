<script>
import { getEnv } from "../assets/js/data.js";

export default {
  data() {
    return {
      environment: getEnv(),
    };
  },
  methods: {},
};
</script>
<template>
  <div>
    <div class="uk-card uk-card-default">
      <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
          <div class="uk-width-expand">
            <h3 class="uk-card-title uk-margin-remove-bottom">
              ⚙️ Environment Variables
            </h3>
          </div>
        </div>
      </div>
      <div class="uk-card-body">
        <form class="uk-form-stacked uk-text-left">
          <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text"
              >Block Interval :
              <span class="uk-text-primary"
                >{{ environment.blockInterval }} ms</span
              ></label
            >
            <div class="uk-form-controls">
              <input
                class="uk-input"
                id="form-stacked-text"
                type="number"
                v-model="environment.blockInterval"
                min=0
              />
            </div>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text"
              >Optimal stopping percentage :
              <span class="uk-text-primary"
                >{{ environment.optimalStoppingPercentage }} %</span
              ></label
            >
            <input
              class="uk-range"
              type="range"
              v-model="environment.optimalStoppingPercentage"
              min="0"
              max="100"
              step="1"
              aria-label="Range"
            />
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text"
              >Selection criteria :
              <span class="uk-text-primary">Top-{{ environment.top_K }}</span></label
            >
            <div class="uk-form-controls">
              <label
                ><input
                  class="uk-radio"
                  type="radio"
                  v-model="environment.top_K"
                  value="1"
                  name="radio1"
                />
                Top 1</label
              ><br />
              <label
                ><input
                  class="uk-radio"
                  type="radio"
                  v-model="environment.top_K"
                  value="5"
                  name="radio1"
                />
                Top 5</label
              ><br />
              <label
                ><input
                  class="uk-radio"
                  type="radio"
                  v-model="environment.top_K"
                  value="10"
                  name="radio1"
                />
                Top 10</label
              ><br />
              <label
                ><input
                  class="uk-radio"
                  type="radio"
                  v-model="environment.top_K"
                  value="25"
                  name="radio1"
                />
                Top 25</label
              >
            </div>
          </div>
        </form>
      </div>
      <!--div class="uk-card-footer">
        <a href="#" class="uk-button uk-button-text">Read more</a>
      </div-->
    </div>
  </div>
</template>
<style scoped>
.uk-card {
  box-shadow: 0 0 100px rgb(216, 216, 216, 0.5);
}
</style>
