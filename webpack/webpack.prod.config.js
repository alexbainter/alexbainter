const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const commonConfig = require('./webpack.common.config');

const productionConfig = esmodules => {
  const config = commonConfig({
    finalStyleLoader: MiniCssExtractPlugin.loader,
    mode: 'production',
    esmodules,
  });
  config.optimization = {
    minimizer: [new OptimizeCssAssetsPlugin({})],
  };

  config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }));

  return config;
};

module.exports = [productionConfig(true), productionConfig(false)];
