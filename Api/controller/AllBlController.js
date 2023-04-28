const { BlModel } = require("../Model/BlModel");
const { BlAllModel } = require("../Model/BlModelAll");

exports.allbladded =async(req,res)=>{
    try{
    const admindata = await BlModel.find()
    if(!admindata){
        return res.status(200).send("Admin not added any data")
    }else{
        req.body.dataBL.map(async(data)=>{
            const BLdata = await BlAllModel.create({
                            blAdmin:req.body.id,
                            vesselOwner:data.vesselOwner,
                            blNo:data.blNo,
                            blDate:data.blDate,
                            blQuantity:data.blQuantity,
                            typeloi:data.typeloi,
                            otherDoc:data.otherDoc,
                            orgloi:data. orgloi,
                            orgblrecd:data.orgblrecd,
                            copyofbl:data. copyofbl,
                            bgreturned:data.bgreturned,
                            blreturn:data.blreturn,
                            couriesNo:data.couriesNo,
                            remarks:data.remarks   
                        });
                        console.log(BLdata);
                        res.status(200).send(BLdata) 
        })
           
    }
    }catch(err){
        res.status(400).send("err") 
    }  

    }


exports.alladdedfinds =async(req,res)=>{
    try{
        const data = await BlAllModel.findOne().sort({_id: -1});
        res.status(200).send(data) 
    }catch(err){
        res.status(400).send("error") 
    }
        
}


exports.alladdedbl =async(req,res)=>{
    try{
        const data = await BlAllModel.find().populate("blAdmin")
        res.status(200).send(data) 
    }catch(err){
        res.status(400).send("error") 
    }
        
}