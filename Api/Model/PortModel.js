const mongoose = require("mongoose");

const portSchema = new mongoose.Schema({
    uniqueID:{ type: String, required: true, required: true },
    portname:{ type: String, required: true, required: true },
    name:{ type: String, required: true, required: true },
    contractNumber:{ type: String, required: true, required: true },
    email:{ type: String, required: true, required: true },
})
const portModel = new mongoose.model("port", portSchema);
module.exports = {portModel};