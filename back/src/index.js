const express = require('express');
const fs = require('fs')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'src')));
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
  });
app.get('/save', (req, res) => {
    const args = req.query;
    console.log(args)
    res.json(args)
})
app.listen(8080)