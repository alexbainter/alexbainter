const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { appEntry, clientDistDir, clientSrcDir } = require('./config/client');

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', path.resolve(appEntry)],
  output: {
    path: path.resolve(clientDistDir),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      styles: path.resolve(clientSrcDir, 'styles'),
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader!sass-loader',
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader',
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
