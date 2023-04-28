const {  userModel } = require("../Model/UserModel");
const bcrypt = require("bcrypt");
const { sendEmail } = require("../Utils/sendmail");


exports.register=async(req,res)=>{
    try{
        const Userdata=await userModel.findOne({email:req.body.email});
        if(Userdata){
            res.status(400).json("Already login ")
        }else{
            var otpGenerate = Math.random();
            otpGenerate = otpGenerate * 1000000;
            otpGenerate = parseInt(otpGenerate);
            var otp = otpGenerate;
            console.log(otp);
            const data = await userModel.create({
                email:req.body.email,
                username:req.body.username,
                portaccess:req.body. portaccess,
                password:otp,
                phonenumber:req.body.phonenumber
            });
            sendEmail(req.body.email,otp);
            const token = await data.getToken();
            res.status(200).send(token)
        }
    }catch(err){
        res.status(400).send("error");
    }

}
exports.login = async(req,res)=>{
    try{
    const data=await userModel.findOne({email:req.body.email});
        if (!data) {
            return res.status(400).send("Please register")
        }
        const isPassword = await bcrypt.compare(req.body.password, data.password)
        if (!isPassword) {
            return res.status(400).json( "Enter a valid password");
        }
        const token = await data.getToken();
        res.status(200).send(token);
    }catch(err){
        res.status(400).send("error");
    }
}