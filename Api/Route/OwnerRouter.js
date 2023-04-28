const express = require("express");
const { newOwner, viewOwner, deleteOwner, viewOneOwner, UpdateOwner } = require("../controller/OwnerController");
const router=express.Router();


router.post("/newOwner",newOwner)
router.get("/viewowner",viewOwner)
router.delete("/:id",deleteOwner)
router.get("/oneowner/:id",viewOneOwner)
router.put("/updateowner/:id",UpdateOwner)

module.exports = router;