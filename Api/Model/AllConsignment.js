
const mongoose = require("mongoose");

const AllconsignmentSchema = new mongoose.Schema({
        consignmentId:{ type:mongoose.Schema.Types.ObjectId,ref:"consignment"},
        accountId:{ type:mongoose.Schema.Types.ObjectId,ref:"account"},
        etas:{ type: String },
        ETB:{ type: String },
        ETBComplete:{type:Boolean,default:false},
        pdaComplete:{type:Boolean,default:false},
        recivername:{ type: String },
        cargotype:{ type: String },
        cargoquantity:{ type: String },
        Timing:{ type: String }
})

const AllconsignmentModel = new mongoose.model("allconsignment", AllconsignmentSchema);
module.exports = {AllconsignmentModel};



















