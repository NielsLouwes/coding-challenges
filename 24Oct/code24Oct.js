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

