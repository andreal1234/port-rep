const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name:{ type: String, required: true, required: true },
    contractNumber:{ type: String, required: true, required: true },
    email:{ type: String, required: true, required: true },
    address:{ type: String, required: true, required: true },
})
const customerModel = new mongoose.model("newcustomer", customerSchema);
module.exports = {customerModel};