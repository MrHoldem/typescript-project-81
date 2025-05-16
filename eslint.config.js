  import eslintPluginTs from '@typescript-eslint/eslint-plugin';
  import parser from '@typescript-eslint/parser';

  export default [
    {
      files: ['**/*.ts'],
      languageOptions: {
        parser,
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
        },
      },
      plugins: {
        '@typescript-eslint': eslintPluginTs,
      },
      rules: {
        semi: ['error', 'double'],
        quotes: ['error', 'always'],
        quotes: 'off',
        semi: 'off',
      },
    },
  ]