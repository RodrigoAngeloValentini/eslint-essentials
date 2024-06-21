module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  plugins: [
    'standard',
    'import',
    '@typescript-eslint',
    'prettier',
    'plugin:prettier/recommended',
    'eslint-plugin-import-helpers',
  ],
  ignorePatterns: ['**/dist/*.js'],
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
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
};
