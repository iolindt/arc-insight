const cacheService = require("../src/services/cacheService");

describe("CacheService", () => {
  test("should store and retrieve value", () => {
    cacheService.set("wallet", "0x123");

    expect(
      cacheService.get("wallet")
    ).toBe("0x123");
  });

  test("should return undefined for missing key", () => {
    expect(
      cacheService.get("missing")
    ).toBeUndefined();
  });
});
