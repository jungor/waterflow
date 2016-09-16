/*eslint no-console:0 */
'use strict';
// require('core-js/fn/object/assign');
// const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');
const path = require('path');
//
// new WebpackDevServer(webpack(config), config.devServer)
// .listen(config.port, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('Listening at localhost:' + config.port);
//   console.log('Opening your system browser...');
//   open('http://localhost:' + config.port + '/webpack-dev-server/');
// });

const express = require('express');
const app = express();

app.use(function delay5s(req, res, next) {
  setTimeout(function () {
    next();
  }, 10);
});


app.get('/assets/*', function serveFile(req, res) {
  res.sendFile(path.join(__dirname, 'dist', req.path));
})

app.get('/', function getIndex(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

app
.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
  console.log('Opening your system browser...');
  open('http://localhost:' + config.port);
});
