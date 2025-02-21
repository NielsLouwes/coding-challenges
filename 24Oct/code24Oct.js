function getMoneySpent(keyboards = [], drives = [], b = 0) {
  let mostExpensiveCombo = 0;

  for (let i = 0; i < keyboards.length; i++) {
    if (keyboards[i] + drives[i] > b) {
      return -1;
    }

    if (keyboards[i] + drives[i] <= b) {
      mostExpensiveCombo = keyboards[i] + drives[i];
    }
  }

  return mostExpensiveCombo;
}

getMoneySpent([40, 50, 60], [5, 8, 12], 60);

module.exports = getMoneySpent;
