<template>
  <div class="uk-text-left">
    <p>
      Optimal Stopping is a statistical method used to determine the best time to make a
      decision when faced with a sequence of options. In this method, the administrator
      rejects some candidates from the start unconditionally, then picks one if the
      candidate has better conditions than all previously rejected ones.
      <br />
      In the context of MEV, Optimal Stopping can help relayers reduce the computational
      load required to check the validity of all block proposals and focus on the most
      valuable ones efficiently, improving scalability and security.
      <h4>Where We Stop ~ The Magic of <i>1/e</i></h4>
      <div class="fig"><img src="../img/fig1.png" /></div>
      The simulation results demonstrate that the optimal strategy for picking the top-1
      candidate is to reject about 37% (1/e ~= 0.3679) of candidates unconditionally. In
      this strategy, the probability of selecting the best candidate is about 40%.
      <br />
      If you are willing to pick a candidate in the top-k, the success rate
      significantly increases, and the percentage of candidates rejected also decreases as
      k increases. For example, if selecting one who is in the top-10 rather than top-1,
      rejecting about 6% of all candidates is the best strategy and the success
      probability is over 90%. Very efficient and robust.<br/>
      <br />
      · See more:
       <a href="https://github.com/MEV-SCONE/simulator-py/blob/main/simul-ODDS.ipynb"
        >https://github.com/MEV-SCONE/simulator-py/blob/main/simul-ODDS.ipynb</a
      >
    </p>
  </div>
</template>

<style scoped>
h4 {
  margin-top: 20px;
}
</style>
