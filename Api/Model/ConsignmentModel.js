const mongoose = require('mongoose')

const consignmentSchema = new mongoose.Schema({
  port: { type: String, required: true, required: true },
  vesselName: { type: String, required: true, required: true },
  vogNumber: { type: String, required: true, required: true },
  charter: { type: String, required: true, required: true },
  broker: { type: String, required: true, required: true },
  ETBComplete:{type:Boolean,default:false},
  pdaComplete:{type:Boolean,default:false},
  epda: { type: String, required: true, required: true },
  eta: { type: String, required: true, required: true },
  ownerName: { type: String, required: true, required: true }
})
const ConsignmentModel = new mongoose.model("consignment", consignmentSchema);
module.exports = {ConsignmentModel};