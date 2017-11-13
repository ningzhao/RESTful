'use bmw';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RoadsignSchema = new Schema({
  id: {
    type : String,
    unique : true
  },
  lat : {
    type : Number,
    required : 'Enter the lat of the roadsign'
  },
  lng : {
    type : Number,
    required : 'Enter the lng of the roadsign'
  },
  notes : {
    type : String,
    enum : ['SPEED_LIMIT_30', 'SPEED_LIMIT_45', 'STOP', 'YIELD', 'ONE_WAY', 'DO_NOT_PASS', 'NO_U_TURN', 'NO_TURN_ON_RED', 'LEFT_TURN_ONLY'],
    default : ['STOP']
  }
});

module.exports = mongoose.model('roadsign', RoadsignSchema);
