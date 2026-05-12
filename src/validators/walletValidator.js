exports.validateWallet = (req, res, next) => {
  const { address } = req.params;

  if (!address || address.length < 10) {
    return res.status(400).json({
      success: false,
      error: "Invalid wallet address"
    });
  }

  next();
};
