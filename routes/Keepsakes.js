var express = require('express');
const keepSake_controlers= require('../controllers/Keepsakes');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    res.redirect("/login");
}

/* GET costumes */
router.get('/', keepSake_controlers.keepSake_view_all_Page);
/* GET detail costume page */
router.get('/detail', keepSake_controlers.keepSake_view_one_Page);
/* GET create costume page */
router.get('/create',secured,keepSake_controlers.keepSake_create_page);
/* GET create update page */
router.get('/update',secured,keepSake_controlers.keepSake_update_Page);
/* GET delete costume page */
router.get('/delete',secured,keepSake_controlers.keepSake_delete_Page);
module.exports = router;