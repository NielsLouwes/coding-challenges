const checkEnoughDynamic = (change = 0, amountDue = 0) => {
  const [quarter, dime, nickel, penny] = change;

  const total = quarter * 0.25 + dime * 0.1 + nickel * 0.5 + penny * 0.01;

  return total >= amountDue;
};

module.exports = checkEnoughDynamic;
