const service = require("../services/arcService");

exports.getBlocks = async (req, res, next) => {
  try {
    const data = await service.fetchBlocks();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

exports.getWallet = async (req, res, next) => {
  try {
    const data = await service.fetchWallet(req.params.address);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};
