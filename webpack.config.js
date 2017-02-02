const path = require('path');
const { appEntry, clientDistDir} = require('./config/client');

module.exports = {
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
                loader: 'babel-loader'
            }
        ]
    }
};
