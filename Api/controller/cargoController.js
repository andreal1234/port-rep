const { CargoModel } = require("../Model/Cargomodel")


exports.newCargo = async (req, res) => {
  try {
    const Cargo = await CargoModel.create(req.body)
    res.status(200).send(Cargo)
  } catch (err) {
    res.status(400).send("Error Occured")
  }
}

exports.viewCargo = async(req,res)=>{
    try{
        const view = await CargoModel.find()
        res.status(200).send(view)
    }catch(error){
        res.status(400).send("Error Occured")
    }
}

exports.deleteCargo=async(req,res)=>{
    try{
    const Cargo = await CargoModel.findByIdAndRemove({_id:req.params.id})
    res.status(200).send(Cargo)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.viewOneCargo=async(req,res)=>{
    try{
    const vessel = await CargoModel.findOne({_id:req.params.id})
    res.status(200).send(vessel)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.UpdateCargo=async(req,res)=>{
    try{
    const id=req.params.id;
    const {cpo,cpoln,rbd,cdsbo,pfad} = req.body;
    const Cargo = await CargoModel.findByIdAndUpdate(id,{cpo,cpoln,rbd,cdsbo,pfad});
    res.status(200).send(Cargo)
    }catch(error){
        res.status(400).send("error Occur")
    }
}
