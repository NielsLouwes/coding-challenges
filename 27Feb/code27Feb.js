

const checkEnoughDynamic = (change = 0, amountDue = 0) => {
  const coinValues = [0.25, 0.1, 0.5, 0.1];

  let totalChange = 0;
  for (let i = 0; i <change.length; i ++) {
    totalChange += change[i] * coinValues[i]
  }

  return totalChange >= amountDue;
};



module.exports = checkEnoughDynamic;

