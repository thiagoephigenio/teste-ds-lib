module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['**/*.js'],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    curly: ['error', 'all'],
    'prettier/prettier': 'error',
    indent: 'error',
  },
};
