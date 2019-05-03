const express = require('express');
const app = express();
const user = require('./user');
const userType = require('./userType');

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'sourceId');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
app.use('/user', user)
app.use('/userType', userType)
app.listen(8848);
/* const router = express.Router()

router.use(function (req, res, next) {
  if (!req.headers['x-auth']) return next('router')
  next()
})

router.get('/', function (req, res) {
  res.send('hello, user!')
})
app.use('/admin', router, function (req, res) {
  res.status(500).send('Something broke!')
})
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
 */

/* app.get('/users/:userId/books/:bookId', function (req, res) {
  console.log(res.params)
  res.send(req.params)
}) */
/* app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});
app.get('/save', (req, res) => {
  const args = req.query;
  res.json(args)
})
app.listen(8848) */