const webpack = require('webpack');

let config = {
  entry: './src/js/app.js',
  output: {
    filename: 'output.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}

module.exports = config;