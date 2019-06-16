const path = require('path');

module.exports = {
  entry: './src/js/property_manager/propertyManager.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimize: false
  },
  output: {
    library: ['propertyManager']
  }
};