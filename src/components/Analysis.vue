<template>
  <div class="uk-text-left">
    <p>
      For your specific example, let's discuss the probability of selecting a top-k
      proposal, considering the distribution of proposals as depicted in the plot
      below:<br />
    </p>

    <dl class="uk-description-list">
      <dt>
        <code><b>validity</b></code>
      </dt>
      <dd>
        indicates whether this proposal is valid or not. Green for True, Red for False.
      </dd>
      <dt>
        <code><b>bid</b></code>
      </dt>
      <dd>
        represents how much ETH the builder wants to give to the relay. Displayed on the
        X-axis.
      </dd>
      <dt>
        <code><b>time_required</b></code>
      </dt>
      <dd>
        shows the amount of time this proposal takes to simulate [ms]. Displayed on the
        Y-axis.
      </dd>
    </dl>
    <div class="fig"><img src="../img/fig2.png" /></div>
    After <code><b>RUN</b></code
    >-ing the simulation 10,000 times, the results demonstrate that implementing optimal
    stopping at an appropriate percentage (such as ~=37%) is the best strategy for
    increasing the probability of selecting the top-k proposals, with high efficiency.
    <div class="uk-child-width-expand@m uk-text-center" uk-grid>
      <div>
        <div class="fig">
          <img src="../img/fig3.png" />
          <figcaption>Fig 1. with a 2000ms block interval (tight)</figcaption>
        </div>
      </div>
      <div>
        <div class="fig">
          <img src="../img/fig4.png" />
          <figcaption>Fig 2. with a 12000ms block interval (loose)</figcaption>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.uk-grid-margin {
  margin-top: 0px;
}
</style>
