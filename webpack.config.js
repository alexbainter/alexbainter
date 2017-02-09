const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { appEntry, clientDistDir, compiledStyles} = require('./config/client');

module.exports = {
    devtool: 'source-map',
    entry: path.resolve(__dirname, appEntry),
    output: {
        path: path.resolve(__dirname, clientDistDir),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: 'babel-loader'
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
                    use: 'css-loader!postcss-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('site.css')
    ]
};
