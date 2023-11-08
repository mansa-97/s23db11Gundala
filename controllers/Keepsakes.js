const Keepsakes = require('../models/Keepsakes');
var keepSake = require('../models/Keepsakes');
// List of all Costumes
exports.keepSake_list = async function(req, res) {
    try{
    theKeepSakes = await Keepsakes.find();
    res.send(theKeepSakes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// for a specific Costume.
exports.keepSake_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.keepSake_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Costume create POST');
};
// Handle Costume delete form on DELETE.
exports.keepSake_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.keepSake_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};
