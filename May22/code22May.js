
const onlyStringsWithNumbers = (strings) => {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const checkForNumbers = strings.filter((string) => {
    for (let i = 0; i < string.length; i++) {
      if (numbers.includes(string[i])) {
        return true;
      }
    }
    return false;
  });

  return checkForNumbers;
};

module.exports = onlyStringsWithNumbers;
