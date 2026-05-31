const requests = new Map();

module.exports = (req, res, next) => {
  const ip = req.ip;
  const current = requests.get(ip) || 0;

  requests.set(ip, current + 1);

  if (current > 100) {
    return res.status(429).json({
      success: false,
      error: "Too many requests"
    });
  }

  next();
};
