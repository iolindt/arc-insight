const axios = require("axios");

const API = process.env.ARC_API_URL;

class ArcService {
  constructor() {
    this.client = axios.create({
      baseURL: API,
      timeout: 5000
    });
  }

  async fetchBlocks(limit = 10) {
    try {
      const res = await this.client.get("/blocks");

      return res.data.slice(0, limit).map(block => ({
        id: block.id,
        txCount: block.transactions?.length || 0,
        timestamp: block.timestamp
      }));
    } catch (err) {
      throw new Error(`Failed to fetch blocks: ${err.message}`);
    }
  }

  async fetchWallet(address) {
    if (!address) {
      throw new Error("Wallet address is required");
    }

    try {
      const res = await this.client.get(`/address/${address}`);

      const txCount = res.data.transactions?.length || 0;

      return {
        address,
        txCount,
        isActive: txCount > 10
      };
    } catch (err) {
      throw new Error(`Failed to fetch wallet: ${err.message}`);
    }
  }
}

module.exports = new ArcService();
