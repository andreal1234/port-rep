const { customerModel } = require("../Model/NewCustomerModel");
const { portModel } = require("../Model/PortModel");


exports.addportmenber = async (req, res) => {
   
    try {
        const port = await portModel.findOne({
            email: req.body.email
        })
        if (port) {
            return res.status(400).send("This vessel name alreday included")
        }
        const portlen = await portModel.find({})
        const {
            portname,
            name,
            email,
            contractNumber,
        } = req.body;
        const data = portModel.create({
            portname,
            name,
            email,
            contractNumber,
            uniqueID: req.body.portname.slice(0, 3) + 00 + (parseInt(portlen.length) + 1)
        })
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send("error")
    }
}

exports.allportmember=async(req,res)=>{
    try{
    const port = await portModel.find()
    res.status(200).send(port)
    }catch(err){
        res.status(400).send("error")
    }
}
exports.deleteport=async(req,res)=>{
    try{
    const vessel = await portModel.findByIdAndRemove({_id:req.params.id})
    res.status(200).send(vessel)
    }catch(err){
        res.status(400).send("error")
    }
}
exports.viewOneeport=async(req,res)=>{
    try{
    const vessel = await portModel.findOne({_id:req.params.id})
    res.status(200).send(vessel)
    }catch(err){
        res.status(400).send("error")
    }
}
exports.viewOneUpdate=async(req,res)=>{
    try{
        const id=req.params.id;
        const {
            portname,
            name,
            email,
            contractNumber,
        } = req.body;
        const oncustomer = await portModel.findOne({
            _id:id
        })
        if(oncustomer. portname===portname){
            const port = await portModel.findByIdAndUpdate(id,{
                portname,
                name,
                email,
                contractNumber,
    })
    res.status(200).send(port)
        }else{
            const name = oncustomer.uniqueId.slice(3,)
        const portn = await portModel.findByIdAndUpdate(id,{
            portname,
            name,
            email,
            contractNumber,
            uniqueID: portname.slice(0,3)+name
    })
    res.status(200).send(portn)
        }
    }catch(err){
        res.status(400).send("error")
    }
}


