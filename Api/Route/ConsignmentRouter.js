const express = require("express");
const { newConsignment, viewConsignment, deleteConsignment, viewOneConsignment, UpdateConsignment, viewConsignmentetb, viewConsignmentetbtrue } = require("../controller/ConsignmentController");
const router=express.Router();



router.post("/newconsignment",newConsignment)
router.get("/viewconsignment",viewConsignment)
router.delete("/:id",deleteConsignment)
router.get("/oneconsignment/:id",viewOneConsignment)
router.put("/updateconsignment/:id",UpdateConsignment)

router.get("/viewconsignmenetbt",viewConsignmentetb)




module.exports = router;