  eslintPluginTs = require('@typescript-eslint/eslint-plugin');
  parser = require('@typescript-eslint/parser');

   module.exports = [
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