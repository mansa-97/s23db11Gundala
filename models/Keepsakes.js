const mongoose = require("mongoose")
const keepSakeSchema = mongoose.Schema({
    keep_model: {type:String,maxLength:15},
    keep_cost: {type:Number,min:10,max:5000},
    keep_quantity: {type:Number,min:0,max:10}
})
module.exports = mongoose.model("KeepSakes",keepSakeSchema)