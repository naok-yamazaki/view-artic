# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

# view-artic

### API

[Documentation | Art Institute of Chicago API](https://api.artic.edu/docs/#introduction)

### Create vite

```bash
corepack pnmp enable
```

[Vite](https://ja.vitejs.dev/guide/)

```bash
pnpm create vite
```

```bash
✔ Project name: … bookmark-artic
✔ Select a framework: › Vue
✔ Select a variant: › TypeScript
```

```bash
cd bookmark-artic
pnpm install
pnpm run dev
```

### Add vueuse

```bash
pnpm add @vueuse/core
```

### Add UnoCSS

[UnoCSS](https://unocss.dev/integrations/vite)

### Add vue-router

[Vue Router](https://router.vuejs.org/installation.html)

### Add eslint

```bash
pnpm add -D eslint eslint-plugin-vue
@typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```bash
touch .eslintrc.yml
```

```yaml
env:
  browser: true
  es2021: true
extends:
  - 'plugin:vue/vue3-recommended'
  - 'eslint:recommended'
  - '@vue/typescript/recommended'
parserOptions:
  ecmaVersion: 12
plugins:
  - vue
  - '@typescript-eslint'
rules: {}
```

### Add prettier

```bash
yarn add -D prettier @vue/eslint-config-prettier
touch .prettierrc.yml
```

```bash
touch .prettierrc.yml
```

```yaml
printWidth: 120
tabWidth: 2
singleQuote: true
semi: false
```
# view-artic
