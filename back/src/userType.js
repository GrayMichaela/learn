const express = require('express')
const router = express.Router()
const connection = require('./mysql')
router.get('/list', function (req, res) {
    try {
        connection.query('select * from userType', function (err, rows, fields) {
            if (err) throw err
            res.json(rows)
        })
    }
    catch (err) {
        res.json(err)
    }
})
/* router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
}) */
/* router.get('/about', function (req, res) {
    res.send('About birds')
}) */

module.exports = router