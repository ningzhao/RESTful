'use bmw';
var mongoose = require('mongoose'), Task = mongoose.model('roadsign');

exports.get_roadsigns = function(req, res) {
  Task.find({}, function(err, task) {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.add_a_roadsign = function(req, res) {

  var new_roadsign = req.body;
  // add location as a unique key
  var lat = new_roadsign.lat;
  var lng = new_roadsign.lng;
  new_roadsign.id = lat + "," + lng;

  Task.findOneAndUpdate(
    { id : new_roadsign.id }, new_roadsign, {upsert : true}, function(err) {
      if (err) {
        res.send(err);
      }
      res.json(new_roadsign);
    }
  );
};
