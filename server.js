'use strict'

const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const app = express();

const compiler = webpack(webpackConfig);
const PORT = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'index.bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true
}));

app.use(require("webpack-hot-middleware")(compiler));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});

