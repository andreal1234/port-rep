const express = require("express");
const { newBroker, viewBroker, deleteBroker, UpdateBroker, viewOneBroker } = require("../controller/BrokerController");
const router=express.Router();


router.post("/newbroker",newBroker)
router.get("/viewbroker",viewBroker)
router.delete("/:id",deleteBroker)
router.get("/onebroker/:id",viewOneBroker)
router.put("/updatebroker/:id",UpdateBroker)



module.exports = router;