require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  apiUrl: process.env.ARC_API_URL
};
