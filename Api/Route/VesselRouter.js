const express = require("express");
const { addnewvesel, allvesel, deletevesel, viewOneeVessel, viewOneUpdate, viewoneVesselusingName } = require("../controller/vesselController");
const router=express.Router();

router.post("/addvessel",addnewvesel)
router.get("/allvessel",allvesel)
router.delete("/:id",deletevesel)
router.get("/oneVessel/:id",viewOneeVessel)
router.post("/oneVesselusingname",viewoneVesselusingName)
router.put("/updateOneVessel/:id",viewOneUpdate)

module.exports = router;