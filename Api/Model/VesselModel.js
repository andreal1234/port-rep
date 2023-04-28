const mongoose = require("mongoose");

const vesselSchema = new mongoose.Schema({
    veselName:{ type: String, required: true, required: true },
    vogNumber:{ type: String, required: true, required: true },
    ownerName:{ type: String, required: true, required: true },
    charterName:{ type: String, required: true, required: true },
    reciverName:{ type: String, required: true, required: true },
    uniqueId:{ type: String, required: true, required: true }
})
const vesselModel = new mongoose.model("vessel", vesselSchema);
module.exports = {vesselModel};