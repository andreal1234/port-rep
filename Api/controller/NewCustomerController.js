const { customerModel } = require("../Model/NewCustomerModel")

exports.customer =async (req,res)=>{
    const data = await customerModel.findOne({email:req.body.email})
    if(data){
        return res.status(400).send("User already register");   
    }
    const customer = await customerModel.create(req.body)
    res.status(200).send(customer)
}

exports.allcustomer=async(req,res)=>{
    try{
    const customer = await customerModel.find()
    res.status(200).send(customer)
    }catch(err){
        res.status(400).send("error")
    }
}
exports.deleteCustomer=async(req,res)=>{
    try{
    const customer = await customerModel.findByIdAndRemove({_id:req.params.id})
    res.status(200).send(customer)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.viewOneCustomer=async(req,res)=>{
    try{
    const vessel = await customerModel.findOne({_id:req.params.id})
    res.status(200).send(vessel)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.viewOneUpdateCustomer=async(req,res)=>{
    const id=req.params.id;
    const { name,contractNumber,email, address} = req.body;
    const customer = await customerModel.findByIdAndUpdate(id,{name,contractNumber,email, address});
    res.status(200).send(customer)
}
