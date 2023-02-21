const checkEnoughMoney = (change, amountDue) => {
  const quarters = change[0] * 0.25;
  const dimes = change[1] * 0.1;
  const nickels = change[2] * 0.5;
  const pennies = change[3] * changeValueArray[3];

  const totalChange = quarters + dimes + nickels + pennies;

  return totalChange >= amountDue;
};

const checkEnoughDynamic = (change, amountDue) => {
  const coinValues = [0.25, 0.1, 0.5, 0.1];

  let totalChange = 0;
  for (let i = 0; i <change.length; i ++) {
    totalChange += change[i] * coinValues[i]
  }

  return totalChange >= amountDue;
};

console.log(checkEnoughMoney([20, 0, 10, 5], 20.0));

module.exports = checkEnoughMoney;

/*
1. the order of the items in array is always representing the type of change
2. map over the change array, 


*/
