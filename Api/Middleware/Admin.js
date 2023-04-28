exports.admin=(req,res,next)=>{
    if(req.user.role=='superadmin'){
            next()
         
        }else{
             res.status(400).json("Access denied")
        }
    }