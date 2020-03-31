
const genId = () => `f${(~~(Math.random()*1e8)).toString(16)}`;

const generateColor =() => {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`;
};

export {
  genId,
  generateColor
};
