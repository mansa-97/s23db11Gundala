var express = require('express');
const keepSake_controlers= require('../controllers/Keepsakes');
var router = express.Router();
/* GET costumes */
router.get('/', keepSake_controlers.keepSake_view_all_Page);
/* GET detail costume page */
router.get('/detail', keepSake_controlers.keepSake_view_one_Page);
/* GET create costume page */
router.get('/create', keepSake_controlers.keepSake_create_page);
/* GET create update page */
router.get('/update', keepSake_controlers.keepSake_update_Page);
/* GET delete costume page */
router.get('/delete', keepSake_controlers.keepSake_delete_Page);
module.exports = router;