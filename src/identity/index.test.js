import identity from ".";

describe("identity", function() {
  it("should return first parameter", function() {
    const parameter = {};
    const expected = parameter;
    const actual = identity(parameter);

    expect(actual).toBe(expected);
  });
});
