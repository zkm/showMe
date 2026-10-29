# ShowMe

[![Test and deploy](https://github.com/zkm/showMe/actions/workflows/webpack.yml/badge.svg)](https://github.com/zkm/showMe/actions/workflows/webpack.yml)
[![live demo](https://img.shields.io/website?url=https%3A%2F%2Fzkm.github.io%2FshowMe%2F&label=live%20demo)](https://zkm.github.io/showMe/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

![JavaScript vanilla](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)
![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black)
![Yarn 4](https://img.shields.io/badge/Yarn-4-2C8EBB?logo=yarn&logoColor=white)

Show or hide HTML elements based on date ranges using a simple browser script.

## Project Structure

- `src/index.html`: static page markup
- `src/js/script.js`: date logic and show/hide behavior
- `src/css/styles.css`: page styles
- `__tests__`: Jest tests for behavior

## Local Development

Install dependencies:

```bash
yarn install
```

Run locally at `http://localhost:8012`:

```bash
yarn start
```

Run tests:

```bash
yarn test
```

Lint:

```bash
yarn lint
```

Format:

```bash
yarn format
```

## GitHub Pages

This repository includes a GitHub Actions workflow that deploys the `dist` folder to GitHub Pages on every push to `master`.

One-time setup per repository:

```bash
gh api --method POST repos/:owner/:repo/pages -f build_type=workflow
```

Then push to `master`; the workflow will build and deploy automatically.
