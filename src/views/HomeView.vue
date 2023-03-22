<script setup>
import Header from "../components/Header.vue";
import Description from "../components/Description.vue";
import Simulator from "../components/Simulator.vue";
import Analysis from "../components/Analysis.vue";
</script>

<template>
  <div class="uk-container">
    <Header />
    <hr />
    <ul uk-accordion="multiple: true">
      <li>
        <a class="uk-accordion-title" href="#">What is / Why Optimal Stopping</a>
        <div class="uk-accordion-content">
          <Description />
        </div>
      </li>
      <li class="uk-open">
        <hr />
        <a class="uk-accordion-title" href="#">Simulator</a>
        <div class="uk-accordion-content">
          <Simulator />
        </div>
      </li>
      <li>
        <hr />
        <a class="uk-accordion-title" href="#">Analysis</a>
        <div class="uk-accordion-content">
          <Analysis />
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
