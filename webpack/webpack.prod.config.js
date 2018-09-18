const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const commonConfig = require('./webpack.common.config');

const config = commonConfig({
  finalStyleLoader: MiniCssExtractPlugin.loader,
  mode: 'production',
});

config.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
    }),
    new OptimizeCssAssetsPlugin({}),
  ],
};

config.entry = {
  'main-compat': ['@babel/polyfill', './src'],
  main: './src',
};

config.plugins.push(
  new MiniCssExtractPlugin({ filename: '[name].[hash].css' })
);

module.exports = config;
