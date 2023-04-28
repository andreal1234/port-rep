const express = require("express");
const { newAccount, viewAccount, deleteAccount, UpdateAccount, viewOneAccount } = require("../controller/AccountController");
const router=express.Router();


router.post("/newAccount",newAccount)
router.get("/oneAccount/:id",viewOneAccount)
// router.put("/updateAccount/:id",UpdateAccount)



module.exports = router;