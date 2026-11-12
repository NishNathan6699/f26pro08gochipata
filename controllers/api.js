
// API specification for our resources
exports.api = function(req, res) {
  res.json([
    {
      resource: 'hikingtrails',
      verbs: ['GET', 'POST', 'PUT', 'DELETE']
    }
  ]);
};
