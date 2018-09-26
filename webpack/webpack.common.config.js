const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = ({ finalStyleLoader, mode }) => ({
  mode,
  devtool: 'source-map',
  entry: ['@babel/polyfill', './src'],
  output: {
    filename: '[name].[hash].js',
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
        use: 'babel-loader',
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
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '..'),
    }),
  ],
});
