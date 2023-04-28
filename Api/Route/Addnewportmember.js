const express = require("express");
const { addportmenber, allportmember, viewOneeport, deleteport, viewOneUpdate } = require("../controller/portMember");
const router=express.Router();

router.post("/newportmember",addportmenber)
router.get("/allportmember",allportmember)
router.get("/oneport/:id",viewOneeport)
router.delete("/:id",deleteport)
router.put("/updateport/:id",viewOneUpdate)
module.exports = router;