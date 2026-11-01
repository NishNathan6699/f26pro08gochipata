var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("WA Lab 10: Home page requested");
  res.render('index', { title: 'Express' });
});

module.exports = router;
