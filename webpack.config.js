const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['babel-polyfill', './src/index'],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      styles: './src/styles',
    },
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        }),
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        use: 'url-loader',
      },
    ],
  },
  plugins: [new ExtractTextPlugin('site.css')],
};
