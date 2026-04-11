const express = require("express");
const router = express.Router();

const arc = require("./arcClient");
const service = require("./service");

router.get("/blocks", async (req, res) => {
  const data = await arc.getLatestBlocks();
  const analyzed = service.analyzeBlocks(data);
  res.json(analyzed);
});

router.get("/wallet/:address", async (req, res) => {
  const data = await arc.getAddressActivity(req.params.address);
  const analyzed = service.analyzeWallet(data);
  res.json(analyzed);
});

module.exports = router;