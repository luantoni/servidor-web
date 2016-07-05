var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('on', { title: 'Raspberry Pi Server' });
});

module.exports = router;
