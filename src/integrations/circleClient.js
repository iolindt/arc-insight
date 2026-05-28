const axios = require("axios");

const circleClient = axios.create({
  baseURL: "https://api.circle.com/v1",
  headers: {
    Authorization: `Bearer ${process.env.CIRCLE_API_KEY}`
  }
});

module.exports = circleClient;
