const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.common.config');

const config = commonConfig({
  finalStyleLoader: MiniCssExtractPlugin.loader,
  mode: 'production',
});

config.plugins.push(
  new MiniCssExtractPlugin({ filename: '[name].[hash].css' })
);

module.exports = config;
