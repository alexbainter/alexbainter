'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const indexHtmlPath = path.join(__dirname, 'src/index.html');

const webpack = (env) => ({
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['file-loader'],
      },
      {
        test: [/\.ico$/, /\.png$/],
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: indexHtmlPath,
      inject: !env.production,
    }),
  ],
});

module.exports = webpack;
