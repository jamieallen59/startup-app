const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackSHAHash = require('webpack-sha-hash');

module.exports = {
    entry: './src/index.jsx',
    resolve: {
        extensions: [".jsx", ".js", ".scss"],
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.[chunkhash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /Styles.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[hash:base64:5]'
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
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                  'file?hash=sha512&digest=hex&name=[hash].[ext]',
                  'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new WebpackSHAHash(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html'
        })
    ],
};
