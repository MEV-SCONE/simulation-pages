<script setup>
import Simulator_Environment from "./Simulator_Environment.vue";
import Simulator_Proposal from "./Simulator_Proposal.vue";
import Simulator_Result from "./Simulator_Result.vue";
</script>
<template>
  <div class="uk-text-left">
    <div class="uk-child-width-1-3@m uk-grid-match" uk-grid>
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