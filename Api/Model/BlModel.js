const mongoose = require("mongoose");

const blSchema = new mongoose.Schema({
    portname:{ type: String },
    vesselname:{ type: String },
    vogno:{ type: String },
    eta:{ type: String },
    arrivetime:{ type: String },
    berthed:{ type: String },
    sailed:{ type: String },
    agent:{ type: String },
    consignee:{ type: String },
    product:{ type: String },
    quantity:{ type: String },
    shipper:{ type: String },
    loadPort:{ type: String },
    dayoversail:{ type: String },
    date:{ type: String,default:Date.now()},
})
const BlModel = new mongoose.model("newBl", blSchema);
module.exports = {BlModel};