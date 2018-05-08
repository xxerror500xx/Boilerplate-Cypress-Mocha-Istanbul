const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new WebpackNotifierPlugin({title: 'Webpack Development'})

  ]
})
