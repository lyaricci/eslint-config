# ESlint config for NodeJS

## What is included?

- Standard config base;
- Prettier;
- Typescript support;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin

## How to setup

1. Install dependencies

```bash
npm i -D @nathalyaricci/eslint-config
```

2. Extend the config in a `.eslintrc.js` or `.eslintrc.json` file

```bash
# .eslintrc.js

module.exports = {
  extends: ["@nathalyaricci/eslint-config/{config-file}"], # /next.js or /node.js
}
```

```bash
# .eslintrc.json

{
  extends: ["@nathalyaricci/eslint-config/{config-file}"], # /next.js or /node.js,
}
```
