const creditCardChecker = (cardNumber = "") => {
  // Remove space
  const sanitiseNumbers = cardNumber.replace(/\s/g, "").split("").map(Number);

  if (sanitiseNumbers.length <= 1 || sanitiseNumbers.isNan) {
    return "Credit card number is not valid";
  }

  // Double every 2nd digit and handle the doubling case of being over 9, then subtract 9
  const processedNumbers = sanitiseNumbers.map((num, index, arr) => {
    let number = num;
    if ((arr.length - index) % 2 === 0) {
      number *= 2;
      if (number > 9) number -= 9;
    }
    return number;
  });

  // Sum all digit need to be divisible by 10
  const sumOfNumbers = processedNumbers.reduce((acc, curr) => acc + curr, 0);

  // Return string message
  return sumOfNumbers % 10 === 0
    ? "Credit card number is valid"
    : "Credit card number is not valid";
};

module.exports = creditCardChecker;

