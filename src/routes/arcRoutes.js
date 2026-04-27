const express = require("express");
const router = express.Router();
const controller = require("../controllers/arcController");

router.get("/blocks", controller.getBlocks);
router.get("/wallet/:address", controller.getWallet);

module.exports = router;
