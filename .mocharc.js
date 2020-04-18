'use strict';

module.exports = {
  diff: true,
  extension: ['js'],
  package: './package.json',
  reporter: 'spec',
  slow: 75,
  timeout: 2000,
  ui: 'bdd',
  require: ['@babel/register']
  //'watch-files': ['renewal/test/*.js']
  //'watch-ignore': ['lib/vendor']
};
