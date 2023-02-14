
function getArrayOfMultiples(num = 0, length = 0) {
  const result = [];
  for (let i = 0; i < length + 1; i++) {
    result.push(num * i)
    
  }
  return result.slice(1, result.length)
}

console.log(getArrayOfMultiples(7,5));



module.exports = getArrayOfMultiples;