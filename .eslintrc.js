module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    semi: [2, 'always'],
    'require-jsdoc': 'error',
    'valid-jsdoc': 'error'
  }
};
