const { AccountModel } = require("../Model/AccountModel");
const { ConsignmentModel } = require("../Model/ConsignmentModel");


exports.newAccount = async (req, res) => {
  try {
    const sameData = await AccountModel.findOne({consignmentId:req.body.consignmentId})
    const {advanceamountAdddate,invoiceamount,inndate,reciveamount,rdate} = req.body;
    if(sameData){
        const accountupdate = await AccountModel.findByIdAndUpdate(sameData._id,{advanceamountAdddate,invoiceamount,inndate,reciveamount,rdate})
        res.status(200).send(accountupdate)
    }else{
        await ConsignmentModel.findByIdAndUpdate(req.body.consignmentId,{pdaComplete:true});
        const Account = await AccountModel.create(req.body)
        
        res.status(200).send(Account)
    }
  } catch (err) {
    res.status(400).send("Error Occured")
  }
}

// exports.viewAccount = async(req,res)=>{
//     try{
//         const view = await AccountModel.find()
//         res.status(200).send(view)
//     }catch(error){
//         res.status(400).send("Error Occured")
//     }
// }

// exports.deleteAccount=async(req,res)=>{
//     try{
//     const Account = await AccountModel.findByIdAndRemove({_id:req.params.id})
//     res.status(200).send(Account)
//     }catch(err){
//         res.status(400).send("error")
//     }
// }

exports.viewOneAccount=async(req,res)=>{
    try{
    const account = await AccountModel.findOne({consignmentId:req.params.id})
    res.status(200).send(account)
    }catch(err){
        res.status(400).send("error")
    }
}

// exports.UpdateAccount=async(req,res)=>{
//     try{
//     const id=req.params.id;
//     const { name,email,phoneNumber,country} = req.body;
//     const Account = await AccountModel.findByIdAndUpdate(id,{name,email,phoneNumber,country});
//     res.status(200).send(Account)
//     }catch(error){
//         res.status(400).send("error Occur")
//     }
// }
