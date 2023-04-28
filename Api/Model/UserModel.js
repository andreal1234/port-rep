const mongoose = require("mongoose");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    email: { type: String, required: true, required: true },
    username: { type: String, required: true, required: true },
    portaccess:{ type: String, required: true, required: true },
    role: { type: String, default: "port", enum: ['port', 'accounts','superadmin','sailed'] },
    password: { type: String, required: true, maxlength: 50, minlength: 4 }, 
    phonenumber:{type:String, required: true, maxlength: 50, minlength: 8} ,
})
userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.getToken = function () {
    const token = jwt.sign({ _id: this._id, username: this.username,email:this.email,role:this.role }, "port", { expiresIn: '24h' });
    return token;
}

const userModel = new mongoose.model("user", userSchema);

module.exports = {userModel};