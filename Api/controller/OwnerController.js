const { OwnerModel } = require("../Model/OwnerModel");


exports.newOwner = async(req,res)=>{
    try{
        const owner = await OwnerModel.create(req.body)
        res.status(200).send(owner)
    }catch(err){
        res.status(400).send("error occur")
    }
}

exports.viewOwner = async(req,res)=>{
    try{
        const view = await OwnerModel.find()
        res.status(200).send(view)
    }catch(error){
        res.status(400).send("Error Occur")
    }
}

exports.deleteOwner=async(req,res)=>{
    try{
    const owner = await OwnerModel.findByIdAndRemove({_id:req.params.id})
    res.status(200).send(owner)
    }catch(err){
        res.status(400).send("error Occur")
    }
}

exports.viewOneOwner=async(req,res)=>{
    try{
    const owner = await OwnerModel.findOne({_id:req.params.id})
    res.status(200).send(owner)
    }catch(err){
        res.status(400).send("error")
    }
}


exports.UpdateOwner=async(req,res)=>{
    try{
    const id=req.params.id;
    const { name,email,phoneNumber,country} = req.body;
    const owner = await OwnerModel.findByIdAndUpdate(id,{name,email,phoneNumber,country});
    res.status(200).send(owner)
    }catch(error){
        res.status(400).send("error Occur")
    }
}