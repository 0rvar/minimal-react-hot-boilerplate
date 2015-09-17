var path = require('path');
var webpack = require('webpack');
var prodConfig = require('./webpack.config');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['webpack-hot-middleware/client'].concat(prodConfig.entry),
  output: prodConfig.output,
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: prodConfig.module,
  postcss: prodConfig.postcss
};
