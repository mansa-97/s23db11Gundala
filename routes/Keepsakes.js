//var express = require('express');
//var router = express.Router();
/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('Keepsakes', { title: 'Keepsakes Search Results' });
//});
//module.exports = router;
var express = require('express');
const keepSake_controlers= require('../controllers/Keepsakes');
var router = express.Router();
/* GET costumes */
router.get('/', keepSake_controlers.keepSake_view_all_Page);
module.exports = router;

/* GET detail costume page */
router.get('/detail', keepSake_controlers.keepSake_view_one_Page);
module.exports = router;