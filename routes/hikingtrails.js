
var express = require('express');
const hikingtrail_controller = require('../controllers/hikingtrail');
var router = express.Router();

router.get('/', hikingtrail_controller.hikingtrail_view_all_Page);

module.exports = router;
