const getPhoneNumberCombinations = (digit = "") => {
  const numberMapping = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "gprs",
    8: "tuv",
    9: "wxyz",
  };

  if (digit.length === 1) {
    return numberMapping[digit];
  }

  const splitDigit = digit.split(''); 
  const mapMultipleDigits = splitDigit.map((item) => numberMapping[item]) 

  return mapMultipleDigits;
};

module.exports = getPhoneNumberCombinations;
