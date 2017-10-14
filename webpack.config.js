const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8000',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    resolve: {
        extensions: [".jsx", ".js", ".scss"]
    },
    output: {
        filename: 'index.js',
        publicPath: '/'
    },
    devServer: {
		stats: {
            chunks: false
		}
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader',
                    'babel-loader'
                ]
            },
            {
                test: /.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    },
                    'resolve-url-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    'babel-loader',
                    'react-svg-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html'
        })
    ],
};
