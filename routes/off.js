var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('off', { title: 'Raspberry Pi Server' });
});

module.exports = router;
