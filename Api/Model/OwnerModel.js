const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
    name:{ type: String, required: true, required: true },
    email:{ type: String, required: true, required: true },
    phoneNumber:{ type: String, required: true, required: true },
    country:{ type: String, required: true, required: true },
})
const OwnerModel = new mongoose.model("owner", ownerSchema);
module.exports = {OwnerModel};


