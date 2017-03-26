const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './client/index.js',
  output: {
    filename: '[name].[hash].js',
    path: __dirname + '/build',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.css/,
        loader: 'style-loader!css-loader!',
      }, {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.rt$/,
        loaders: ['babel-loader?presets[]=es2015', 'react-templates-loader?modules=es6']
      }, {
        test   : /\.json$/,
        loader : 'json'
      } ,
      {
        test: /\.svg$/i, loader:'file'
      },
      {
        test: /\.png$/i, loader:'file'
      },
        // Font Definitions
        { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
        { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
        { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
        { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
        { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: 'favicon.ico'
    })
  ]
}
