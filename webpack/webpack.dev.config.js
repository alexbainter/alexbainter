const commonConfig = require('./webpack.common.config');

module.exports = Object.assign(
  {},
  commonConfig({
    finalStyleLoader: 'style-loader',
    mode: 'development',
  }),
  { devServer: { historyApiFallback: true } }
);
