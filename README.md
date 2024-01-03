# eslint-config

ESlint configuration for React/Nextjs and Nodejs

## What is included?

- Standard config base;
- Typescript support;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Tailwindcss;
- Simple-import-sort

## How to setup

1. Install dependencies

```bash
npm i -D @nathalyaricci/eslint-config
```

2. Extend the config in a `.eslintrc.js`, `.eslintrc` or `.eslintrc.json` file

```bash
# .eslintrc.js

module.exports = {
  extends: ["@nathalyaricci/eslint-config/{config-file}"] # /react or /node
}
```

```bash
# .eslintrc.json or .eslintrc

{
  extends: ["@nathalyaricci/eslint-config/{config-file}"] # /react or /node
}
```
