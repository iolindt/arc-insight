require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  arcApiUrl: process.env.ARC_API_URL
};
