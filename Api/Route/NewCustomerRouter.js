const express = require("express");
const { customer, allcustomer, deleteCustomer, viewOneUpdateCustomer, viewOneCustomer,  } = require("../controller/NewCustomerController");
const router=express.Router();

router.post("/newcustomer",customer)
router.get("/allcustomer",allcustomer)
router.get("/onecustomer/:id",viewOneCustomer)
router.delete("/:id",deleteCustomer)
router.put("/updateCustomer/:id",viewOneUpdateCustomer)
module.exports = router;