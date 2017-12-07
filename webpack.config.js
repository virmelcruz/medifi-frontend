'use strict'

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index.js'
  ],//entry point for the project,
  output: { //outputs the bundle files
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'index.bundle.js'
  },
  module: {
    rules: [ //rules on how each file should be process before combine to bundle. converts es6 to es5
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          "eslint-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
    }
    ]
  },
  resolve: { //where webpack should look for files import or require() statement
    modules: [
      path.join(__dirname, 'node_modules')
    ]
  },
  plugins: [
    // OccurenceOrderPlugin is needed for webpack 1.x only
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin()
  ]
}