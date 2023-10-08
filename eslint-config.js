module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
  },
  plugins: [
    "@typescript-eslint",
    "simple-import-sort", "react",
    "jsx-a11y"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "all",
        arrowParens: "always",
        semi: false,
      },
    ],
    "@typescript-eslint/no-var-requires": "off",
    "react/self-closing-comp": "error",
    "react/prop-types": "off",
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "react/no-unknown-property": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
    ignorePatterns: [
      "node_modules"
    ]
  },
}
