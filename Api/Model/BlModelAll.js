const mongoose = require("mongoose");

const blSchema = new mongoose.Schema({
        blAdmin:{type:mongoose.Schema.Types.ObjectId,ref:"newBl",required: true},
        vesselOwner:{ type: String },
        blNo:{ type: String },
        blDate:{ type: String },
        blQuantity:{ type: String },
        typeloi:{ type: String },
        otherDoc:{ type: String },
        orgloi:{ type: String },
        orgblrecd:{ type: String },
        copyofbl:{ type: String },
        bgreturned:{ type: String },
        blreturn:{ type: String },
        couriesNo:{ type: String },
        remarks:{ type: String },   
})
const BlAllModel = new mongoose.model("newAllBl", blSchema);
module.exports = {BlAllModel};