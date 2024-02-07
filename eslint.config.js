import js from '@eslint/js'
import globals from 'globals'

import pluginTypescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import pluginImport from 'eslint-plugin-import'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    ignores: ['**/*.d.ts', '**/node_modules/**', '**/build/**', '**/dist/**'],
    plugins: {
      '@typescript-eslint': pluginTypescript,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginTypescript.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: ['arrowFunctions'],
        },
      ],
      eqeqeq: 'error',
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
      'no-constant-condition': [
        'error',
        {
          checkLoops: false,
        },
      ],
      //'no-undefined': 'error',
      'no-case-declarations': 'off',
      'no-useless-catch': 'off',
      'no-undef': 'off',
      'no-redeclare': 'off',
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: typescriptParser,
    },
  },
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      ...pluginImport.configs.recommended.rules,
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
          groups: [
            'builtin',
            'external',
            'internal',
            'unknown',
            'parent',
            'sibling',
            'index',
            'type',
          ],
          'newlines-between': 'always',
        },
      ],
      'import/no-duplicates': [
        'error',
        {
          considerQueryString: true,
        },
      ],
    },
    // All eslint-plugin-import config is here
    languageOptions: {
      parserOptions: {
        // Eslint doesn't supply ecmaVersion in `parser.js` `context.parserOptions`
        // This is required to avoid ecmaVersion < 2015 error or 'import' / 'export' error
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    settings: {
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  },
]
