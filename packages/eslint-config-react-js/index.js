module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'prettier',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': 'error',
    'react/self-closing-comp': 'error',
    'react/no-unknown-property': 'error',
    'react/jsx-wrap-multilines': 'off',
    'react/prop-types': 'warn',
    'prettier/prettier': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-multiple-empty-lines': 'error',
    'prefer-promise-reject-errors': 'off',
    'react/display-name': 'off',
    'no-use-before-define': [
      'error',
      {functions: true, classes: true, variables: true},
    ],
    'no-console': 'warn',
    'no-alert': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.mjs', '.jsx'],
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.mjs', '.js', '.json'],
      },
    },
  },
  ignorePatterns: ['node_modules'],
};
