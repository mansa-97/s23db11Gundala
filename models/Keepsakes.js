const mongoose = require("mongoose")
const keepSakeSchema = mongoose.Schema({
    keep_model:String,
    keep_cost:Number,
    keep_quantity:Number
})
module.exports = mongoose.model("KeepSakes",
keepSakeSchema)