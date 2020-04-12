module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-restricted-properties': 'off',
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true }
    ],
    'comma-dangle': ['error', { functions: 'never' }],
    'class-methods-use-this': 'off',
    'operator-linebreak': 'off',
    'getter-return': 'off',
    'prettier/prettier': 'error'
  }
};
