
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('hikingtrails', {
    title: 'Search Results - Hiking Trails'
  });
});

module.exports = router;
