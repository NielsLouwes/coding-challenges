/* Step by step 
1. B is money available
2. keyboards and drives are arrays with prices
3. keyboard[i] + drives[i], must not exceed b.
4. filter them out, sort those, return the largest number that can be afforded
*/

const keyboards = [10,20,30];
const drives = [3,5,8];
const money = 25;
function getMoneySpent(keyboards = [], drives = [], b = 0) {
    let maxPrice = -1;
     
    for(let i = 0; i < keyboards.length; i++) {
        for(let j = 0; j < drives.length; j++) {
            if (keyboards[i] +  drives[j] <= b && keyboards[i] + drives[j] > maxPrice) {
                maxPrice = keyboards[i] + drives[j];
            }
        }
    }
    return maxPrice;
}

module.exports = getMoneySpent;

