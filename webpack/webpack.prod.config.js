const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');
const commonConfig = require('./webpack.common.config');

const productionConfig = esmodules => {
  const config = commonConfig({
    finalStyleLoader: MiniCssExtractPlugin.loader,
    mode: 'production',
    esmodules,
  });

  const minimizer = [new OptimizeCssAssetsPlugin({})];
  // UglifyJS doesn't support ES6
  if (!esmodules) {
    minimizer.push(
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      })
    );
  }

  config.optimization = {
    minimizer,
  };

  config.plugins.push(
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new EnvironmentPlugin({ NODE_ENV: 'production' })
  );

  return config;
};

module.exports = [productionConfig(true), productionConfig(false)];
