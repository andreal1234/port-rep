const { BrokerModel } = require('../Model/BrokerModel')

exports.newBroker = async (req, res) => {
  try {
    const sameData = await BrokerModel.findOne({email:req.body.email})
    if(sameData){
        return res.status(400).send("This email already register")
    }
    const broker = await BrokerModel.create(req.body)
    res.status(200).send(broker)
  } catch (err) {
    res.status(400).send("Error Occured")
  }
}

exports.viewBroker = async(req,res)=>{
    try{
        const view = await BrokerModel.find()
        res.status(200).send(view)
    }catch(error){
        res.status(400).send("Error Occured")
    }
}

exports.deleteBroker=async(req,res)=>{
    try{
    const broker = await BrokerModel.findByIdAndRemove({_id:req.params.id})
    res.status(200).send(broker)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.viewOneBroker=async(req,res)=>{
    try{
    const vessel = await BrokerModel.findOne({_id:req.params.id})
    res.status(200).send(vessel)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.UpdateBroker=async(req,res)=>{
    try{
    const id=req.params.id;
    const { name,email,phoneNumber,country} = req.body;
    const broker = await BrokerModel.findByIdAndUpdate(id,{name,email,phoneNumber,country});
    res.status(200).send(broker)
    }catch(error){
        res.status(400).send("error Occur")
    }
}
