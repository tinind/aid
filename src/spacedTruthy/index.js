import identity from "../identity";

const SPACE = " ";

export default (...args) => args.filter(identity).join(SPACE);
