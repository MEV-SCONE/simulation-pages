<script setup>
import Simulator_Environment from "./Simulator_Environment.vue";
import Simulator_Proposal from "./Simulator_Proposal.vue";
import Simulator_Result from "./Simulator_Result.vue";
</script>
<template>
  <div class="uk-text-left">
    <img class="uk-width-large" src="../img/logo.png" />
    <h3 class="title">Optimal Stopping Simulator for PBS</h3>
    <p>
      Briefly explain the purpose of the demo and how it showcases the benefits of using
      Optimal Stopping for PBS.
      <br />
      Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua.
      <br />
      by <a href="http://d3lab.xyz/">@D3LAB.</a>
    </p>
    <hr class="uk-divider-small" />
    <div class="uk-child-width-1-3@s uk-grid-match" uk-grid>
      <div>
        <Simulator_Environment />
      </div>
      <div>
        <Simulator_Proposal />
      </div>
      <div>
        <Simulator_Result />
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-weight: 600;
  font-size: 30px;
  padding: 20px 0 0 0;
  margin: 0;
}

.uk-divider-small {
  padding: 20px 0 20px 0;
}
</style>
