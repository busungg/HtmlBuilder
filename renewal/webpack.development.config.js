const path = require('path');

module.exports = {
  mode: 'development',
  entry: './renewal/js/mainManager.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'htmlbuilder.js',
    library: ['Htmlbuilder']
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
        test: /\.test\.js$/,
        use: 'mocha-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['import-directory']
          }
        }
      },
      {
        test: /\.css$/i,
        exclude: /(componentUtil.css|default.css|html_builder.css)/,
        use: [
          'style-loader',
          'to-string-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: true
            }
          } // 추후 local로 사용
        ]
      },
      {
        test: /(componentUtil.css|default.css|html_builder.css)/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'to-string-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: true
            }
          } // 추후 local로 사용
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
};
