# SCONE

> Introducing Optimal Stopping to reduce computational load on relays/validators, for more efficient and secure block proposal validation in PBS.

Our project, SCONE, is built on a combination of research, data analysis, statistical modeling, and simulation development to address the scalability and security challenges of PBS in high-load chain environments. To the best of our knowledge, the SCONE project is the first initiative aimed at studying the scalability and security of the proposer-builder separation (PBS) scheme in a high-load chain environment.

# SCONE Simulator

Given that the MEV auction in PBS is poised to become a significant market, we developed the open-source "Optimal Stopping for PBS" simulator to share our findings and demonstrate the importance of our work to the blockchain community.

Our mission is to provide a user-friendly simulation tool that can help researchers and relays/validators understand and experiment with the potential benefits of Optimal Stopping in block evaluation. Additionally, we offer two versions of our simulator implementation in Python and JavaScript, respectively, to accommodate users' language preferences.

- JavaScript: [`simulator`](https://github.com/MEV-SCONE/simulator/blob/main/src/assets/js/data.js)
- Python: [`simulator-py`](https://github.com/MEV-SCONE/simulator-py/blob/main/simul-SCONE.ipynb)

Our project required extensive research and data analysis of maximal extractable value (MEV) and the scalability and security challenges of PBS. Although determining the meaningful risk potential from the data is currently challenging due to a lack of competition, we put considerable effort into utilizing real-world Ethereum data to refine our definitions and assumptions and explore potential DoS attack scenarios.

In addition, we utilized statistical modeling and simulation tools to implement Optimal Stopping in PBS, experimenting with various models to ensure our solution was robust and effective in various scenarios.

# Demo

![demo](https://storage.googleapis.com/ethglobal-api-production/projects%2Foqkmy%2Fimages%2FSlide25.png)

[https://mev-scone.github.io/simulator](https://mev-scone.github.io/simulator)

---

# How to Run

```sh
$ npm run <build|preview|deploy>
```

<details>
<summary>See more</summary>

<!-- Need One blank line -->

## Project Setup

```sh
$ npm install
```

## Project Build

```sh
$ npm run build
```

## Compile and Hot-Reload for Development

```sh
$ npm run dev
```

## Compile and Minify for Production

```sh
$ npm run preview
```

## Deploy Github Pages

```sh
$ npm run deploy
```

</details>
