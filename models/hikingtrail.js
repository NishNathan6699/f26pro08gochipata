
const mongoose = require('mongoose');

const hikingTrailSchema = mongoose.Schema({
  name: String,
  location: String,
  difficulty: String,
  length: Number
});

module.exports = mongoose.model('HikingTrail', hikingTrailSchema);
