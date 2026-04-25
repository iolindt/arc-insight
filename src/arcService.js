const axios = require("axios");
const { arcApiUrl } = require("../config");

class ArcService {
  constructor() {
    this.client = axios.create({
      baseURL: arcApiUrl,
      timeout: 5000
    });
  }

  async fetchBlocks(limit = 10) {
    const res = await this.client.get("/blocks");

    return res.data.slice(0, limit).map(block => ({
      id: block.id,
      txCount: block.transactions?.length || 0,
      timestamp: block.timestamp
    }));
  }

  async fetchWallet(address) {
    if (!address) throw new Error("Address required");

    const res = await this.client.get(`/address/${address}`);
    const txCount = res.data.transactions?.length || 0;

    return {
      address,
      txCount,
      isActive: txCount > 10
    };
  }
}

module.exports = new ArcService();
