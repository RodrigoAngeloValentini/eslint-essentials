module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  plugins: [
    'import',
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-import-helpers',
  ],
  ignorePatterns: ['**/dist/*.js'],
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', '/^@/', ['parent', 'sibling', 'index']],
        alphabetize: {order: 'asc', ignoreCase: true},
      },
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
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': [
      'error',
      {vars: 'all', args: 'after-used', ignoreRestSiblings: true},
    ],
    'no-use-before-define': [
      'error',
      {functions: true, classes: true, variables: true},
    ],
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.js', '.ts', '.d.ts'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  ignorePatterns: ['node_modules'],
};
