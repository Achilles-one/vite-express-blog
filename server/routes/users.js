var express = require('express');
var router = express.Router();

var db = require('../db/db')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/userList', (req, res, next) => {
  // sql查询user表
  db.query('SELECT * FROM admin', [], function (results, fields) {
    // 以json的形式返回
    res.json({ results })
  })
})



module.exports = router;
