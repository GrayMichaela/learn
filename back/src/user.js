const express = require('express')
const router = express.Router()
const connection = require('./mysql')
const resInstans = require('./resInstans');
const userType = require('./userType')
router.use('/type', userType)
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
module.exports = router