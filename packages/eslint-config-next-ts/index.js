module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/self-closing-comp': 'error',
    'import/no-unresolved': 'error',
    'react/self-closing-comp': 'error',
    'react/no-unknown-property': 'error',
    'react/jsx-wrap-multilines': 'off',
    'react/prop-types': 'off',
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

    'init-declarations': 'off',
    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message: 'Use Number.isFinite instead',
      },
      {
        name: 'isNaN',
        message: 'Use Number.isNaN instead',
      },
    ],
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-use-before-define': [
      'error',
      {functions: true, classes: true, variables: true},
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: ['node_modules'],
};
