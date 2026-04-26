const arcService = require("../services/arcService");
const logger = require("../utils/logger");

exports.getBlocks = async (req, res, next) => {
  try {
    const data = await arcService.fetchBlocks();
    res.json({ success: true, data });
  } catch (err) {
    logger.error(err);
    next(err);
  }
};

exports.getWallet = async (req, res, next) => {
  try {
    const { address } = req.params;
    const data = await arcService.fetchWallet(address);

    res.json({ success: true, data });
  } catch (err) {
    logger.error(err);
    next(err);
  }
};
