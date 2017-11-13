'user bmw';

module.exports = function(app) {
  var todoRoadsign = require('../controllers/roadsignController');
  var todoSearch = require('../controllers/searchController');

  app.route('/roadsign').get(todoRoadsign.get_roadsigns).post(todoRoadsign.add_a_roadsign);
  app.route('/search?').get(todoSearch.search_roadsigns);
}
