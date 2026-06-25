class WalletMapper {
  static toResponse(address, walletData) {
    const txCount = walletData.transactions?.length || 0;

    return {
      address,
      txCount,
      isActive: txCount > 10,
      lastActivity: walletData.transactions?.[0]?.timestamp || null
    };
  }
}

module.exports = WalletMapper;
