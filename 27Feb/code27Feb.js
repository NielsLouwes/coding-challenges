const checkEnoughDynamic = (change = 0, amountDue = 0) => {
  const [quarter, dime, nickel, penny] = change;

  // only checking if you have enough money
  const total = quarter * 0.25 + dime * 0.1 + nickel * 0.5 + penny * 0.01;
  console.log("total", total);
  return total >= amountDue;
};

module.exports = checkEnoughDynamic;
