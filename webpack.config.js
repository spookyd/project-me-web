var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var data = require('./data');

module.exports = {
    entry: './entry.js',

    output: {
        filename: 'bundle.js',
        path: __dirname,
        libraryTarget: 'umd'
    },

    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
            {
                test: /\.css/,
                exclude: /colors\.css/,
                loader: 'css-loader!cssnext-loader'
            },
            { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: "file-loader" }
        ]
    },

    plugins: [
        new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
    ],

    cssnext: {
        compress: true,
        features: {
            rem: false,
            pseudoElements: false,
            colorRgba: false
        }
    }

};
