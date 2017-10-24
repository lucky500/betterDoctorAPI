const webpack = require('webpack');
const path = require("path");
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {
  entry: './src/js/interface.js',
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: 'output.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.hbs$/,
        use: [{
          loader: "handlebars-loader",
          options: {helperDirs: path.resolve(__dirname, "./js/helpers")}
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('style.css')
  ],
  devServer: {
    contentBase: path.resolve(__dirname, ''),
    historyApiFallback: true,
    inline: true,
    open: true
  },
  devtool: 'eval-source-map'
}

module.exports = config;