var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var keepsake_controller = require('../controllers/Keepsakes');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/keepSakes', keepsake_controller.keepSake_create_post);
// DELETE request to delete Costume.
router.delete('/keepSakes/:id', keepsake_controller.keepSake_delete);
// PUT request to update Costume.
router.put('/keepSakes/:id', keepsake_controller.keepSake_update_put);
// GET request for one Costume.
router.get('/keepSakes/:id', keepsake_controller.keepSake_detail);
// GET request for list of all Costume items.
router.get('/keepSakes', keepsake_controller.keepSake_list);
module.exports = router;