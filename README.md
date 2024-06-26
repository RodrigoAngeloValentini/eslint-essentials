# ESLint Essentials

## Whats included?

- Eslint 8
- Standard config base;
- React plugin;
- React native plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

### Node (with Typescript)

Install dependencies:

```cmd
npm i -D eslint @eslint-essentials/eslint-config-node-ts
```

Configure your `.prettierrc` with your preferences:

```json
{
  "arrowParens": "avoid",
  "bracketSameLine": true,
  "bracketSpacing": false,
  "singleQuote": true,
  "trailingComma": "all"
}
```

Configure your VSCode:

```json
{
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.tabSize": 2,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.fixAll": "explicit"
  },
  "eslint.validate": [
    "html",
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact"
  ]
}
```

Inside `.eslintrc`

```json
{
  "extends": "@eslint-essentials/eslint-config-node-ts"
}
```

### React Native (without Typescript)

Install dependencies:

```cmd
npm i -D eslint @eslint-essentials/eslint-config-react-native-js
```

Inside `.eslintrc`

```json
{
  "extends": "@eslint-essentials/eslint-config-react-native-js"
}
```

### React Native (with Typescript)

Install dependencies:

```cmd
npm i -D eslint @eslint-essentials/eslint-config-react-native-ts
```

Inside `.eslintrc`

```json
{
  "extends": "@eslint-essentials/eslint-config-react-native-ts"
}
```

### React (without Typescript)

Install dependencies:

```cmd
npm i -D eslint @eslint-essentials/eslint-config-react-js
```

Inside `.eslintrc`

```json
{
  "extends": "@eslint-essentials/eslint-config-react-js"
}
```

### React (with Typescript)

Install dependencies:

```cmd
npm i -D eslint @eslint-essentials/eslint-config-react-ts
```

Inside `.eslintrc`

```json
{
  "extends": "@eslint-essentials/eslint-config-react-ts"
}
```
