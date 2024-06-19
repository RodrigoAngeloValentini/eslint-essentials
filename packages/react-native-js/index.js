module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    es6: true,
    jest: true,
  },
  plugins: ["react", "react-native", "jsx-a11y", "import", "prettier"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:react-hooks/recommended",
    "standard",
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
      jsx: true,
      modules: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "react/self-closing-comp": "error",
    "react/no-unknown-property": "error",
    "react/jsx-wrap-multilines": "off",
    "react/prop-types": "1",
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
    "import/extensions": [".js", ".jsx"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
      [require.resolve("babel-plugin-root-import")]: {
        rootPathSuffix: "src",
        rootPathPrefix: "~/",
      },
    },
  },
  ignorePatterns: ["node_modules"],
};
