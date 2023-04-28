const mongoose = require("mongoose");

const CargoSchema = new mongoose.Schema({
    cpo: { type: String, required: true, required: true },
    cpoln: { type: String, required: true, required: true },
    rbd:{ type: String, required: true, required: true },
    cdsbo:{ type: String, required: true, required: true },
    pfad:{ type: String, required: true, required: true }
})
const CargoModel = new mongoose.model("Cargo", CargoSchema);
module.exports = {CargoModel};