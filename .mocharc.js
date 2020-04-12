'use strict';

module.exports = {
  diff: true,
  extension: ['js'],
  package: './package.json',
  reporter: 'spec',
  slow: 75,
  timeout: 2000,
  ui: 'bdd',
  'watch-files': ['renewal/**/*.test.js']
  //'watch-files': ['renewal/**/*.js', 'test/**/*.js'],
  //'watch-ignore': ['lib/vendor']
};
