module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'comma-dangle': ['error', {'functions': 'never'}],
    'class-methods-use-this': 'off',
    'operator-linebreak': 'off',
    'no-restricted-properties': 'off',
    'getter-return': 'off',
    'no-unused-expressions': ['error', { "allowShortCircuit": true, "allowTernary": true }]
  },
};
