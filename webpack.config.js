const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './client/index.js',

  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude:/node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader/url',
          use: ['css-loader']
        })
      },
      {
        test: /\.rt$/,
        use: ['babel-loader?presets[]=latest', 'react-templates-loader?modules=es6']
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|[ot]tf|eot)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 65000
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR,
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new ExtractTextPlugin('style.css'),
    new FaviconsWebpackPlugin('./favicon.png')
  ]
}
