import overload from ".";

describe("overload", function() {
  it("should call function with matching parameter length", function() {
    const actual = jest.fn(arg => {});

    overload(actual)(1);

    expect(actual).toHaveBeenCalled();
  });

  it("should throw function with mismatching parameter length", function() {
    const actual = () => overload(arg => {})();

    expect(actual).toThrow();
  });

  it("should override previous implementation on length conflict", function() {
    const actual1 = jest.fn(arg => {});
    const actual2 = jest.fn(arg => {});

    overload(actual1, actual2)(1);

    expect(actual1).not.toHaveBeenCalled();
    expect(actual2).toHaveBeenCalled();
  })
});
