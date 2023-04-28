const express = require("express");
const { newCargo, viewCargo, deleteCargo, viewOneCargo, UpdateCargo } = require("../controller/cargoController");

const router=express.Router();


router.post("/newCargo",newCargo)
router.get("/viewCargo",viewCargo)
router.delete("/:id",deleteCargo)
router.get("/oneCargo/:id",viewOneCargo)
router.put("/updateCargo/:id",UpdateCargo)



module.exports = router;