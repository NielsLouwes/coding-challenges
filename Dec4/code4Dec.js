const isGoodMatch = (numbers = []) => {
  if (numbers.length < 1) return 
  if (numbers.length % 2 !== 0) {
    console.log('bad match!')
    return [];
  }

  const finalArr = [];

  for (let i = 0; i < numbers.length; i += 2) {
    finalArr.push(numbers[i] + numbers[i + 1])
  }

  return finalArr;
}

console.log(isGoodMatch([1,2,3,4,5]))
