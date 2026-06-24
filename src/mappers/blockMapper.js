class BlockMapper {
  static toResponse(block) {
    return {
      id: block.id,
      txCount: block.transactions?.length || 0,
      timestamp: block.timestamp,
      validator: block.validator || null
    };
  }

  static toCollection(blocks) {
    return blocks.map(block => this.toResponse(block));
  }
}

module.exports = BlockMapper;
