import catchPromise from ".";

describe("catchPromise", function() {
  it("should return result", async function() {
    const expected = Symbol('OK')
    const fn = jest.fn(arg => Promise.resolve(expected));

    const [actual, e, isError] = await catchPromise(fn)()

    expect(fn).toHaveBeenCalled();
    expect(isError).toBe(false);
    expect(actual).toBe(expected);
  })

  it("should return error", async function() {
    const expected = Symbol('error')
    const fn = jest.fn(arg => Promise.reject(expected));

    const [actual, e, isError] = await catchPromise(fn)()

    expect(fn).toHaveBeenCalled();
    expect(isError).toBe(true);
    expect(actual).toBe(expected);
  })
});
