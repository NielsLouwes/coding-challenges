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
const maxProfit = (prices) => {
  // check if prices[i] < lowerprice, if is it becomes lowest price
  //

  // if current price < previous lowest price, it becomes lowest price
  // if next price is > than current price, save the difference

  let difference = 0;
  let lowestPrice = prices.length

  if (difference === 0) return 

  const checkDifference = prices.forEach((price, index, array) => {
     if (price < lowestPrice) {
      lowestPrice = price
     }

     console.log('array', array)
  })

  console.log('checkDifferences()', checkDifferences())
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
