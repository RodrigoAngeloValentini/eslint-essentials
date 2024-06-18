module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  plugins: [
    "react",
    "react-native",
    "jsx-a11y",
    "prettier",
    "@typescript-eslint",
  ],
  extends: [
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
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
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [
        ".ts",
        ".tsx",
        ".js",
        ".jsx",
        ".d.ts",
      ],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  ignorePatterns: ["node_modules"],
};
