module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  plugins: ["react", "jsx-a11y", "prettier", "@typescript-eslint"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: "latest",
  },
  rules: {
    "import/no-unresolved": "error",
    "react/self-closing-comp": "error",
    "react/no-unknown-property": "error",
    "react/jsx-wrap-multilines": "off",
    "react/prop-types": "off",
    "prettier/prettier": "error",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "no-multiple-empty-lines": "error",
    "prefer-promise-reject-errors": "off",
    "react/display-name": "off",
    "no-use-before-define": [
      "error",
      { functions: true, classes: true, variables: true },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  ignorePatterns: ["node_modules"],
};
