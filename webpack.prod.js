var webpack = require('webpack');
var path = require('path');

var autoprefixer = require('autoprefixer');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = false;

module.exports = {
    mode: "production",
    devtool: 'cheap-module-eval-source-map',

    entry: './index.js',

    output: {
        path: path.resolve('./'),
        publicPath: 'http://localhost:8080/',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {allowTsInNodeModules: true}
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {sourceMap: true}},
                    {loader: 'sass-loader', options: {sourceMap: true}},
                    {
                        loader: 'postcss-loader',
                        options: {sourceMap: true, syntax: 'postcss-scss', plugins: [autoprefixer()]}
                    },
                ],
            },
        ]
    },
};
