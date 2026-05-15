exports.healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    uptime: process.uptime(),
    message: "API is healthy",
    timestamp: Date.now()
  });
};
