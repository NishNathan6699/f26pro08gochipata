
const HikingTrail = require('../models/hikingtrail');

// Display all hiking trails from the database.
exports.hikingtrail_view_all_Page = async function(req, res) {
  try {
    const trails = await HikingTrail.find();
    res.render('hikingtrails', {
      title: 'Search Results - Hiking Trails',
      results: trails
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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
exports.hikingtrail_create_post = async function(req, res) {
  try {
    const trail = new HikingTrail({
      name: req.body.name,
      location: req.body.location,
      difficulty: req.body.difficulty,
      length: req.body.length
    });
    const result = await trail.save();
    res.status(201).json(result);
  } catch (err) {
    const status = err.name === 'ValidationError' ? 400 : 500;
    res.status(status).json({ error: err.message });
  }
};

// Delete a hiking trail using DELETE
exports.hikingtrail_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Hiking Trail delete DELETE ' + req.params.id);
};

// Update a hiking trail using PUT
exports.hikingtrail_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: Hiking Trail update PUT ' + req.params.id);
};
