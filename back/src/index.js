const express = require('express');
const app = express();
const user = require('./user');
const path = require('path');
app.use(express.static(path.join(__dirname, 'dist')))
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'sourceId');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
app.use('/user', user)
app.listen(8848);