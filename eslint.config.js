// import globals from 'globals'
// import pluginJs from '@eslint/js'
// import tseslint from '@typescript-eslint/eslint-plugin'
// import tsParser from '@typescript-eslint/parser'
// import pluginReact from 'eslint-plugin-react'
// import path from 'path'
// import { fileURLToPath } from 'url'

// const __dirname = path.dirname(fileURLToPath(import.meta.url))

// /** @type {import('eslint').Linter.FlatConfig[]} */
// export default [
//   {
//     files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
//     languageOptions: {
//       parser: tsParser,
//       parserOptions: {
//         ecmaVersion: 2020,
//         sourceType: 'module',
//         ecmaFeatures: {
//           jsx: true,
//         },
//       },
//       globals: globals.browser,
//     },
//     plugins: {
//       '@typescript-eslint': tseslint,
//       react: pluginReact,
//     },
//     rules: {
//       ...pluginJs.configs.recommended.rules,
//       ...tseslint.configs.recommended.rules,
//       ...pluginReact.configs.recommended.rules,
//       'react/react-in-jsx-scope': 'off',
//       '@typescript-eslint/no-explicit-any': 'off',
//       'no-prototype-builtins': 'off',
//       '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
//     },
//     settings: {
//       react: {
//         version: 'detect',
//       },
//       'import/resolver': {
//         alias: {
//           map: [['@', path.resolve(__dirname, './src')]],
//           extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
//         },
//       },
//     },
//   },
// ]
