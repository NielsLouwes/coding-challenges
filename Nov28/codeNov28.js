function inBox(arr = []) { 
 const gift = '#';

for (let arrayItem of arr) {
    if (arrayItem.at(0) === gift && arrayItem.at(-1) === gift && arrayItem.includes('*')){
        return true;
        } 
    }
    return false;
}

module.exports = inBox;


