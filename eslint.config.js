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
          quotes: 'off', // Кавычки могут быть любыми
          semi: ['error', 'always'],    // Требовать точки с запятой
        },
    },
  ]