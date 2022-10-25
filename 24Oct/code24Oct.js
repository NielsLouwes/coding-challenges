/* Step by step 
1. B is money available
2. keyboards and drives are arrays with prices
3. keyboard[i] + drives[i], must not exceed b.
4. filter them out, sort those, return the largest number that can be afforded
*/

const keyboards = [10,20,30];
const drives = [3,5,8];
const money = 25;

// const affordKeyboards = keyboards.filter(keyboard => keyboard < money)
// console.log('affordKeyboards', affordKeyboards);

// const affordDrives = drives.filter(drive => drive < money)
// console.log('affordDrives', affordDrives);
// ;
// const combineLists = [...keyboards, ...drives];
// console.log('combinedLists', combineLists);



function getMoneySpent(keyboards = [], drives = [], b = 0) {
    let max = -1;
     
    for(let i = 0; i < keyboards.length; i++) {
        const keyboardPrice = keyboards[i];
        for(let j = 0; j < drives.length; j++) {
            const drivePrice = drives[j];
            if (keyboardPrice + drivePrice <= b && keyboardPrice + drivePrice > max) {
                max = keyboardPrice + drivePrice;
            }
        }
    }
    return max;
}

console.log('getMoneySpent', getMoneySpent([10,20,30], [3,5,8], 40));

module.exports = getMoneySpent;

 


  //   const checkCombinedPrices = keyboards.map((keyboard) => {
  //   let max = -1;
  //   drives.map((drive) => {
  //     if (keyboard + drive <= b && keyboard + drive > max) {
  //      return checkCombinedPrices;
  //     }
  //   })
  //   return max;
  // })

  // https://stackoverflow.com/questions/44131209/using-a-map-within-a-map-in-jsx