const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const makeBabelConfiguration = require('./babel/make-babel-config');

module.exports = ({ finalStyleLoader, mode, esmodules = true }) => ({
  mode,
  devtool: 'source-map',
  entry: esmodules ? './src' : ['@babel/polyfill', './src'],
  output: {
    filename: esmodules ? '[name].js' : '[name].compat.js',
    chunkFilename: esmodules ? '[id].[contenthash].js' : '[id].[contenthash].compat.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      styles: path.resolve('./src/styles'),
      data: path.resolve('./src/data'),
      samples: path.resolve('./samples'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../samples'),
          path.resolve(__dirname, '../node_modules/@generative-music'),
          path.resolve(__dirname, '../node_modules/markov-chains'),
          path.resolve(__dirname, '../node_modules/tonal'),
          path.resolve(__dirname, '../node_modules/pick-random'),
        ],
        use: {
          loader: 'babel-loader',
          options: makeBabelConfiguration(esmodules),
        },
      },
      {
        test: /\.s?css$/,
        use: [finalStyleLoader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        use: 'url-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.template.html',
      hash: true,
      inject: false,
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '..'),
    }),
  ],
});
