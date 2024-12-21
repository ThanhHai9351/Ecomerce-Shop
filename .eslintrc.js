export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off', // React 17+ no longer needs React in scope
    '@typescript-eslint/no-unused-vars': 'warn', // Warn for unused variables
    'no-unused-vars': 'off', // Disable base eslint unused-vars rule
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // Prettier rules
    'import/order': ['error', { 'newlines-between': 'always' }], // Enforce import order
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
}
