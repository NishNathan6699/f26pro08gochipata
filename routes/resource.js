var express = require('express');
var router = express.Router();


// Import controllers
var api_controller = require('../controllers/api');
var hikingtrail_controller = require('../controllers/hikingtrail');

// API specification
router.get('/', api_controller.api);

// Hiking trail resource endpoints
router.post('/hikingtrails', hikingtrail_controller.hikingtrail_create_post);

router.delete('/hikingtrails/:id', hikingtrail_controller.hikingtrail_delete);

router.put('/hikingtrails/:id', hikingtrail_controller.hikingtrail_update_put);

router.get('/hikingtrails/:id', hikingtrail_controller.hikingtrail_detail);

router.get('/hikingtrails', hikingtrail_controller.hikingtrail_list);

module.exports = router;
