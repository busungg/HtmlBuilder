const path = require('path');

module.exports = {
  entry: './src/js/mainManager.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'htmlbuilder.js',
    library: ['HtmlBuilder']
  },
  optimization: {
    minimize: false
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};