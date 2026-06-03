# ShowMe

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
