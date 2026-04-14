function analyzeBlocks(blocks) {
  if (!blocks || !blocks.length) return [];

  return blocks.slice(0, 10).map(block => ({
    id: block.id,
    txCount: block.transactions?.length || 0,
    timestamp: block.timestamp
  }));
}

function analyzeWallet(data) {
  if (!data) return null;

  return {
    address: data.address,
    txCount: data.transactions?.length || 0,
    isActive: (data.transactions?.length || 0) > 10
  };
}

module.exports = {
  analyzeBlocks,
  analyzeWallet
};
