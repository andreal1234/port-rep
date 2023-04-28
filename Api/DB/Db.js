const mongoose= require("mongoose");

const dbdata = ()=>{
    mongoose.connect("mongodb+srv://port:Riig9TqluBD7SxEM@cluster0.gzlyjwa.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>console.log("DB connected successful"))
    .catch(()=>console.log("Sorry not connect DB"))
}
module.exports=dbdata;