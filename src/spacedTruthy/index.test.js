import spacedTruthy from ".";

describe("spacedTruthy", function() {
  it("should return joined parameters", function() {
    const expected = "bg-primary text-white";

    const actual = spacedTruthy("bg-primary", "text-white");

    expect(actual).toBe(expected);
  });

  it("should return truthy parameters", function() {
    const expected = "bg-primary";

    const isActive = false;
    const actual = spacedTruthy("bg-primary", isActive && "text-white");

    expect(actual).toBe(expected);
  });
});
