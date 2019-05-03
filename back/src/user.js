const express = require('express')
const router = express.Router()
const connection = require('./mysql')
const resInstans = require('./resInstans')
/* router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
}) */
router.get('/list', function (req, res) {
    const { pageIndex, pageSize } = req.query;
    try {
        connection.query(`select * from user`, function (err, rows, fields) {
            if (err) throw err
            res.json((resInstans({ total: rows.length, list: rows.slice((pageIndex - 1) * pageSize, pageSize * pageIndex), msg: 'ok', state: 200 })))
        })
    }
    catch (err) {
        res.json((resInstans({ list: err, msg: 'err', state: 500 })))
    }
})
/* router.get('/about', function (req, res) {
    res.send('About birds')
}) */

module.exports = router