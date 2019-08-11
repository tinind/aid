import composePage from ".";

describe("composePage", function() {
  it("should be a function", function() {
    const expected = "function";
    const actual = typeof composePage;

    expect(actual).toBe(expected);
  })
});
