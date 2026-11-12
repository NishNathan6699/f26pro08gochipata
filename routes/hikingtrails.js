
var express = require('express');
const hikingtrail_controller = require('../controllers/hikingtrail');
var router = express.Router();

router.get('/', hikingtrail_controller.hikingtrail_view_all_Page);
router.get('/create', hikingtrail_controller.hikingtrail_create_Page);
router.get('/:id', hikingtrail_controller.hikingtrail_item_Page);
router.get('/:id/:mode', hikingtrail_controller.hikingtrail_item_Page);

module.exports = router;
