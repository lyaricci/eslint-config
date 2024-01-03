module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "standard",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "simple-import-sort",
  ],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
  settings: {
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
    ignorePatterns: [
      "node_modules"
    ]
  },
}
