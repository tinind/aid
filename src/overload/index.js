const toMapByLength = (implementations, implementation) => ({
  ...implementations,
  [implementation.length]: implementation
});

export default (...implementations) => {
  const map = implementations.reduce(toMapByLength, {});

  return (...args) => map[args.length](...args);
};
