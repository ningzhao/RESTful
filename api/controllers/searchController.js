'use bmw';

var mongoose = require('mongoose');
var Roadsign = mongoose.model('roadsign');


exports.search_roadsigns = function(req, res) {

  var param = req.query;
  console.log("search request : ", param);
  var lat = Number(param.lat);
  var lng = Number(param.lng);
  var radius = Number(param.radius);
  var lat_start = lat - radius;
  var lat_end = lat + radius;
  var lng_start = lng - radius;
  var lng_end = lng + radius;

  var set_notes = new Set();
  var set_roadsign = new Set();

  Roadsign.find({lat : { $gte : lat_start, $lte : lat_end}, lng : { $gte : lng_start, $lte : lng_end}}
    , function(err, task) {
    if (err) {
      res.send(err);
    }
    // console.log("task : ", task);
    for (t in task) {
      // console.log("t: ", t);
      if (!set_notes.has(task[t].notes)) {
        set_notes.add(task[t].notes)
        set_roadsign.add(task[t]);
      }
    }
    // console.log("set_roadsign : ", set_roadsign);

    let array = Array.from(set_roadsign);
    res.json(array);
  });
};
