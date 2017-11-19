// @Ning created 11/12/2017

var express = require('express'), app = express();
var host = process.env.IP || 'ec2-18-221-143-222.us-east-2.compute.amazonaws.com',  port = process.env.port || 8080;
var mongoose = require('mongoose');
var RoadsignSchema = require('./api/models/roadsignModel');
var bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://18.221.143.222:8080/bmw');

db.connection.on("error", function(err) {
  console.log("failed in connection to database: ", err);
});

db.connection.on("open", function() {
  console.log("dabase connected!");
});

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(express.static("./api/public"));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Headers", "*");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
// })

var routes = require('./api/routes/mainRoute');
routes(app);

app.listen(port);


console.log('Roadsign RESTful API server started on: ' + host + ':'+ port);
