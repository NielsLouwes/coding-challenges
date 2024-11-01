/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

1. Looking first for the lowest value in the array with Math.min and indexOf to checkits index
2. Then the remaining items, find the biggest number
3. Sum those

*/
const maxProfit = function (prices) {
  let lowestBuyNumber = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    // if value im iterating over is less than the first item in prices array
    if (prices[i] < lowestBuyNumber) {
      console.log("prices[i]", prices[i]);
      lowestBuyNumber = prices[i]; // then lowestBuyNumber pointer becomes the new lowest value
    } else if (prices[i] - lowestBuyNumber > profit) {
      // profit is 0 at first, then we check if current price in arr - lowestBuyNumber number
      profit = prices[i] - lowestBuyNumber;
    }
  }
  return profit;
};

maxProfit([7, 1, 5, 3, 6, 4]);
