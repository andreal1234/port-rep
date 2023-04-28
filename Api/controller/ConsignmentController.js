
const { ConsignmentModel } = require('../Model/ConsignmentModel')

exports.newConsignment = async (req, res) => {
  try {
    const Consignment = await ConsignmentModel.create(req.body)
    res.status(200).send(Consignment)
  } catch (err) {
    res.status(400).send("Error Occured")
  }
}

exports.viewConsignment = async(req,res)=>{
    try{
        const view = await ConsignmentModel.find()
        res.status(200).send(view)
    }catch(error){
        res.status(400).send("Error Occured")
    }
}

exports.viewConsignmentetb = async(req,res)=>{
    try{
        const view = await ConsignmentModel.find({ETBComplete:false})
        res.status(200).send(view)
    }catch(error){
        res.status(400).send("Error Occured")
    }
}
// exports.viewConsignmentetbtrue = async(req,res)=>{
//     try{
//         const view = await ConsignmentModel.find({ETBComplete:true})
//         res.status(200).send(view)
//     }catch(error){
//         res.status(400).send("Error Occured")
//     }
// }

exports.deleteConsignment=async(req,res)=>{
    try{
    const Consignment = await ConsignmentModel.findByIdAndRemove({_id:req.params.id})
    res.status(200).send(Consignment)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.viewOneConsignment=async(req,res)=>{
    try{
    const vessel = await ConsignmentModel.findOne({_id:req.params.id})
    res.status(200).send(vessel)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.UpdateConsignment=async(req,res)=>{
    try{
    const id=req.params.id;
    const { port,vesselName,vogNumber,charter,broker,epda,eta,ownerName} = req.body;
    const Consignment = await ConsignmentModel.findByIdAndUpdate(id,{port,vesselName,vogNumber,charter,broker,epda,eta,ownerName});
    res.status(200).send(Consignment)
    }catch(error){
        res.status(400).send("error Occur")
    }
}
