const express = require("express");
const app=express();
const db = require("./DB/Db")
const cors = require("cors")
require('dotenv').config();
db();
const user = require("./Route/userRouter")
const vessel=require("./Route/VesselRouter");
const customer=require("./Route/NewCustomerRouter");
const portMember = require("./Route/Addnewportmember")
const bl = require("./Route/blRouter");
const { authToken } = require("./Middleware/Auth");
const owner = require("./Route/OwnerRouter") 
const broker = require("./Route/BrokerRouter") 
const consignment = require("./Route/ConsignmentRouter") 
const cargo = require("./Route/Cargoroute") 
const account = require("./Route/AccountRouter") 
const allconsignment = require("./Route/AllconsignmentRoute") 

if ( process.env.NODE_ENV == "production"){

    app.use(express.static("port_admin1/build"));

    // const path = require("path");

    // app.get("*", (req, res) => {

    //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    // })


}

app.use(cors());
app.use(express.json());
app.use("/user",user);
app.use("/vessel",vessel);
app.use("/cutomer",customer);
app.use("/portmember",portMember);
app.use("/bl",bl);
app.use("/owner",owner)
app.use("/broker",broker)
app.use("/consignment",consignment)
app.use("/cargo",cargo)
app.use("/account",account)
app.use("/allconsignment",allconsignment)



app.listen(process.env.PORT||4000,console.log("server start in 4000"))

