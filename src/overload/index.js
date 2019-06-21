export default implementations => (...args) =>
  implementations[args.length](...args);
