const express = require("express");
const { addnewbl, allbl, viewOneBl, viewOneUpdateBl, onebl } = require("../controller/BLcontroller");
const { allbladded, alladdedfinds, alladdedbl } = require("../controller/AllBlController");
const router=express.Router();

router.post("/newbl",addnewbl)
router.get("/allbl",allbl)
router.get("/onebl",onebl)
router.get("/onebl/:id",viewOneBl)
router.put("/updatebl/:id",viewOneUpdateBl)
router.post("/newAllbl",allbladded)
router.get("/blAddedFind",alladdedfinds)
router.get("/alladdedbl",alladdedbl)

module.exports = router;