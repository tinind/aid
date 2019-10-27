export default function catchPromise(fn) {
  return async (...args) => {
    try {
      return [await fn(...args), , false];
    } catch (e) {
      return [, e, true];
    }
  };
}
