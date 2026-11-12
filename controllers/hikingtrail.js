
const HikingTrail = require('../models/hikingtrail');

// List all hiking trails

exports.hikingtrail_list = async function(req, res) {
  try {
    const trails = await HikingTrail.find();
    res.json(trails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get one hiking trail
exports.hikingtrail_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Hiking Trail detail: ' + req.params.id);
};

// Create a hiking trail using POST
exports.hikingtrail_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Hiking Trail create POST');
};

// Delete a hiking trail using DELETE
exports.hikingtrail_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Hiking Trail delete DELETE ' + req.params.id);
};

// Update a hiking trail using PUT
exports.hikingtrail_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: Hiking Trail update PUT ' + req.params.id);
};
