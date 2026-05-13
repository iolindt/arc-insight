const express = require("express");
const router = express.Router();

const controller = require("../controllers/arcController");
const { validateWallet } = require("../validators/walletValidator");

router.get("/blocks", controller.getBlocks);

router.get(
  "/wallet/:address",
  validateWallet,
  controller.getWallet
);

module.exports = router;
