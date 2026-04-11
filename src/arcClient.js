const axios = require("axios");

const API = process.env.ARC_API_URL;

async function getLatestBlocks() {
  try {
    const res = await axios.get(`${API}/blocks`);
    return res.data;
  } catch (err) {
    return { error: "Failed to fetch blocks" };
  }
}

async function getAddressActivity(address) {
  try {
    const res = await axios.get(`${API}/address/${address}`);
    return res.data;
  } catch (err) {
    return { error: "Failed to fetch address" };
  }
}

module.exports = {
  getLatestBlocks,
  getAddressActivity
};