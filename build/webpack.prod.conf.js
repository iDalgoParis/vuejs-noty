const path = require('path')
const baseConf = require('./webpack.base.conf');
const webpack = require('webpack')

module.exports = Object.assign({}, baseConf, {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'vuejs-noty.js',
    library: ['vuejs-noty'],
    libraryTarget: 'umd'
  },
  devtool: false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})
