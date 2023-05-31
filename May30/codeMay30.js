const boomerangs = (input = []) => {
  let count = 0;
  input.filter((item, index) => {
    if (
      input[index] !== input[index - 1] &&
      input[index] !== input[index + 1] &&
      input[index - 1] === input[index + 1]
    ) {
      count++;
    }
  });
  return count;
};

module.exports = boomerangs;
