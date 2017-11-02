const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://0.0.0.0:8000',
    'react-hot-loader/patch',
    './src/index.js'
  ],
  resolve: {
    extensions: ['.js', '.js', '.scss'],
    alias: {
      __counter: path.resolve(__dirname, 'src/counter/')
    }
  },
  output: {
    filename: 'index.js',
    publicPath: '/'
  },
  devServer: {
    stats: {
      chunks: false
    },
    hot: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
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
        use: ['babel-loader', 'react-svg-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
