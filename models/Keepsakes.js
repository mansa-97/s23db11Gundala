const mongoose = require("mongoose")
const keepSakeSchema = mongoose.Schema({
    keep_model:String,
    keep_cost: {type:Number,min:10,max:5000},
    keep_quantity:Number
})
module.exports = mongoose.model("KeepSakes",
keepSakeSchema)