const SPACE = " ";
export default (...args) => args.filter(identity).join(SPACE);
