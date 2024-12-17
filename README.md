# NJWDS Web Components

## Key concepts

- `Yarn`: This project uses ` yarn` - creators of the starter kit said it solves dependencies better, it has more functions that `npm` does not have and is used in other projects. The commands are very similar, don't worry if you haven't seen `yarn` yet.
- [`lit-plugin`](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin) Is a syntax highlighting, type checking and code completion for `lit` in VS Code.
- [`Vite`](https://vitejs.dev/) is a build tool that aims to provide a faster and leaner development experience for modern web projects. See `vite.config.ts` for build configuration.

## Components

- Button (`src/nj-button.ts`)
- Icon (`src/nj-icon.ts`)

## 🚀 Dev setup

_Note: This repo is forked from the [Lit Simple Starter Kit](https://github.com/litelement-dev/lit-simple-starter-kit)._

### Requirements

- Have `npm` or` yarn` installed
- Use VS code
- Have installed `lit-plugin` for VS Code. Download: [`lit-plugin by Rune Mehlsen`](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin)

### Local setup

1. Clone repo
2. `yarn install`
3. `yarn build` - compiles TS files into JS files in `dist/` folder
4. `yarn dev` - hosts `index.html` in web server for live testing
5. `yarn test` - runs automated tests
