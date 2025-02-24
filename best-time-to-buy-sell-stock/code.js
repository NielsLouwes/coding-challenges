const mostProfit = (prices = []) => {
  // output is highest price[i] - lowest price[i]

  let profit = 0;
  let stockToBuy = prices[0]; // initial is price index 0

  for (let i = 0; i < prices.length; i++) {
    if (stockToBuy > prices[i]) {
      stockToBuy = prices[i]; // we look for the lowest number in the arr
    }

    const currentProfit = prices[i] - stockToBuy; // we check profit of the current price - lower buy number in arr
    console.log("currentProfit", currentProfit);

    if (currentProfit > profit) {
      profit = currentProfit;
    }
  }

  return profit;
};

mostProfit([7, 1, 5, 3, 6, 4]);
