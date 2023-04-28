const { AccountModel } = require("../Model/AccountModel")
const { AllconsignmentModel } = require("../Model/AllConsignment")
const { ConsignmentModel } = require("../Model/ConsignmentModel")


exports.newAllconsignment = async (req, res) => {
    try{
    const consigndata = await AllconsignmentModel.findOne({consignmentId:req.body.data.consignmentId})
    const account = await AccountModel.findOne({consignmentId:req.body.data.consignmentId})
    const {consignmentId,etas,ETB,Timing}=req.body.data 
        if(account){
            if(Timing){
                req.body.inputlist.map(async(data)=>{
                    const Allconsignment = await AllconsignmentModel.create({   
                        accountId:account._id,
                        consignmentId,
                        etas,
                        ETB,
                        ETBComplete:true,
                        Timing,
                        recivername:data.recivername,
                        cargotype: data.cargotype,
                        cargoquantity:data.cargoquantity,
                    })   
                }) 
                await ConsignmentModel.findByIdAndUpdate(req.body.data.consignmentId,{ETBComplete:true,pdaComplete:true});
                res.status(200).send("Data sucessfully store");
            }else{
                req.body.inputlist.map(async(data)=>{
                    const Allconsignment = await AllconsignmentModel.create({   
                        accountId:account._id,
                        consignmentId,
                        etas,
                        ETB,
                        ETBComplete:true,
                        Timing,
                        recivername:data.recivername,
                        cargotype: data.cargotype,
                        cargoquantity:data.cargoquantity,
                    })   
                }) 
                await ConsignmentModel.findByIdAndUpdate(req.body.data.consignmentId,{ETBComplete:true});
                res.status(200).send("Data sucessfully store");
            }
               

        }else{
            res.status(400).send("Account not added")
        }
  } catch (err) {
    res.status(400).send("Error Occured")
  }
}

exports.accountData = async(req,res)=>{
    const id=req.params.id;
    const accountdata = await AccountModel.findOne({consignmentId:id})
    res.status(200).send(accountdata);
}

exports.viewAllconsignmenteta = async(req,res)=>{
    try{
        const view = await AllconsignmentModel.find({ETBComplete:true,pdaComplete:false}).populate({
            path: "consignmentId",
            
        }).populate({ path: "accountId" })
        res.status(200).send(view)
    }catch(error){
        res.status(400).send("Error Occured")
    }
}

exports.viewAllconsignmentetatrue = async(req,res)=>{
    try{
        const view = await AllconsignmentModel.find({ETBComplete:true,pdaComplete:true}).populate({
            path: "consignmentId",
            
        }).populate({ path: "accountId" })
        res.status(200).send(view)
    }catch(error){
        res.status(400).send("Error Occured")
    }
}

exports.viewAllconsignment = async(req,res)=>{
    try{
        const view = await AllconsignmentModel.find().populate("consignmentId")
        res.status(200).send(view)
    }catch(error){
        res.status(400).send("Error Occured")
    }
}

exports.deleteAllconsignment=async(req,res)=>{
    try{
    const Allconsignment = await AllconsignmentModel.findByIdAndRemove({_id:req.params.id})
    res.status(200).send(Allconsignment)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.viewOneAllconsignment=async(req,res)=>{
try{
    const id=req.params.id
    const consign = await AllconsignmentModel.findOne({_id:id}).populate("consignmentId")
    res.status(200).send(consign)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.UpdateAllconsignment=async(req,res)=>{
    try{
    const id=req.params.id;
    const { etas,ETB,Timing,recivername,cargotype,cargoquantity} = req.body;
    if(Timing){
        const Allconsignment = await AllconsignmentModel.findByIdAndUpdate(id,{etas,ETB,Timing,recivername,cargotype,cargoquantity,pdaComplete:true});
        res.status(200).send(Allconsignment)
    }else{
        const Allconsignment = await AllconsignmentModel.findByIdAndUpdate(id,{etas,ETB,Timing,recivername,cargotype,cargoquantity,});
        res.status(200).send(Allconsignment)
    }
    }catch(error){
        res.status(400).send("error Occur")
    }
}
