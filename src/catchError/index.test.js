import catchError from ".";

describe("catchError", function() {
  it("should return result", function() {
    const expected = Symbol('OK')
    const fn = jest.fn(arg => expected);

    const [actual, , isError] = catchError(fn)()

    expect(fn).toHaveBeenCalled();
    expect(isError).toBe(false);
    expect(actual).toBe(expected);
  })

  it("should return error", function() {
    const expected = Symbol('error')
    const fn = jest.fn(arg => {throw expected});

    const [, e, isError] = catchError(fn)()

    expect(fn).toHaveBeenCalled();
    expect(isError).toBe(true);
    expect(e).toBe(expected);
  })
});
