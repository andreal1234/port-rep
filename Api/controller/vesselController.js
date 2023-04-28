const {
    vesselModel
} = require("../Model/VesselModel");


exports.addnewvesel = async (req, res) => {
    try {
        const vessel = await vesselModel.findOne({
            veselName: req.body.veselName
        })
        if (vessel) {
            return res.status(400).send("This vessel name alreday included")
        }
        const vesselno = await vesselModel.find({})
        const {
            veselName,
            vogNumber,
            ownerName,
            charterName,
            reciverName
        } = req.body;
        const data = vesselModel.create({
            veselName,
            vogNumber,
            ownerName,
            charterName,
            reciverName,
            uniqueId: req.body.veselName.slice(0, 3) + 00 + (parseInt(vesselno.length) + 1)
        })
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send("error")
    }
}

exports.allvesel=async(req,res)=>{
    try{
    const vessel = await vesselModel.find()
    res.status(200).send(vessel)
    }catch(err){
        res.status(400).send("error")
    }
}
exports.deletevesel=async(req,res)=>{
    try{
    const vessel = await vesselModel.findByIdAndRemove({_id:req.params.id})
    res.status(200).send(vessel)
    }catch(err){
        res.status(400).send("error")
    }
}
exports.viewOneeVessel=async(req,res)=>{
    try{
    const vessel = await vesselModel.findOne({_id:req.params.id})
    res.status(200).send(vessel)
    }catch(err){
        res.status(400).send("error")
    }
}
exports.viewoneVesselusingName=async(req,res)=>{
    try{
    const vessel = await vesselModel.findOne({veselName:req.body.vesselname})
    res.status(200).send(vessel)
    }catch(err){
        res.status(400).send("error")
    }
}
exports.viewOneUpdate=async(req,res)=>{
    try{
        const id=req.params.id;
        const {
            veselName,
            vogNumber,
            ownerName,
            charterName,
            reciverName
        } = req.body;
        const onevessel = await vesselModel.findOne({
            _id:id
        })
        if(onevessel.veselName===veselName){
            const vessel = await vesselModel.findByIdAndUpdate(id,{
            veselName,
            vogNumber,
            ownerName,
            charterName,
            reciverName
    })
    res.status(200).send(vessel)
        }else{
            const name = onevessel.uniqueId.slice(3,)
        const vessel = await vesselModel.findByIdAndUpdate(id,{
        veselName,
        vogNumber,
        ownerName,
        charterName,
        reciverName,
        uniqueId: veselName.slice(0,3)+name
    })
    res.status(200).send(vessel)
        }
    }catch(err){
        res.status(400).send("error")
    }
}


