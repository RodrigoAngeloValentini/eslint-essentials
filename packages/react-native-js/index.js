module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: false,
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
    "prettier/prettier": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/extensions": [".js", ".jsx"],
  },
  ignorePatterns: ["node_modules"],
};
