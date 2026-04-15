const axios = require("axios");

const API = process.env.ARC_API_URL;

exports.fetchBlocks = async () => {
  try {
    const res = await axios.get(`${API}/blocks`);

    return res.data.slice(0, 10).map(block => ({
      id: block.id,
      txCount: block.transactions?.length || 0,
      timestamp: block.timestamp
    }));
  } catch (err) {
    throw new Error("Failed to fetch blocks");
  }
};

exports.fetchWallet = async (address) => {
  try {
    const res = await axios.get(`${API}/address/${address}`);

    return {
      address,
      txCount: res.data.transactions?.length || 0,
      isActive: (res.data.transactions?.length || 0) > 10
    };
  } catch (err) {
    throw new Error("Failed to fetch wallet");
  }
};
