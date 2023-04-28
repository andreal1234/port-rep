const mongoose = require("mongoose");

const BrokerSchema = new mongoose.Schema({
    name:{ type: String, required: true, required: true },
    email:{ type: String, required: true, required: true },
    phoneNumber:{ type: String, required: true, required: true },
    country:{ type: String, required: true, required: true },
})
const BrokerModel = new mongoose.model("broker", BrokerSchema);
module.exports = {BrokerModel};