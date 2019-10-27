export default function catchError(fn) {
  return (...args) => {
    try {
      return [fn(...args), , false];
    } catch (e) {
      return [, e, true];
    }
  };
}
