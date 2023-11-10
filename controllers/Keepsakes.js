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
// exports.keepSake_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
// };
// Handle Costume create on POST.
exports.keepSake_create_post = async function(req, res) {
    console.log(req.body)
    let document = new keepSake();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.keep_model = req.body.keep_model;
    document.keep_cost = req.body.keep_cost;
    document.keep_quantity = req.body.keep_quantity;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle Costume delete form on DELETE.
exports.keepSake_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
//Handle Costume update form on PUT.
exports.keepSake_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Keepsakes.findById( req.params.id)
// Do updates of properties
if(req.body.keep_model)
toUpdate.keep_model = req.body.keep_model;
if(req.body.keep_cost) toUpdate.keep_cost = req.body.keep_cost;
if(req.body.keep_quantity) toUpdate.keep_quantity = req.body.keep_quantity;
let result = await toUpdate.save();
console.log("Success " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
//VIEWS
// Handle a show all view
exports.keepSake_view_all_Page = async function(req, res) {
try{
theKeepSakes = await Keepsakes.find();
res.render('keepSakes', { title: 'keepSakes Search Results', results: theKeepSakes });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// for a specific Costume.
exports.keepSake_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Keepsakes.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found}`);
    }
    };
