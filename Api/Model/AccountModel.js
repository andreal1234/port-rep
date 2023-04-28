const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
        consignmentId:{ type:mongoose.Schema.Types.ObjectId,ref:"consignment"},
        advanceamount: { type: String },
        Adddate: { type: Date },
        invoiceamount: { type: String },
        inndate: { type: Date },
        reciveamount: { type: String },
        rdate: { type: Date },
})
const AccountModel = new mongoose.model("account", AccountSchema);
module.exports = {AccountModel};