const isGoodMatch = (numbers = []) => {
   const length = numbers.length;

   if (length % 2 !== 0) {
    return 'bad match'
   }

   let result = [];

   for (let i  = 0; i < numbers.length - 1; i +=2){
    result.push(numbers[i] + numbers[i + 1])
   }

 return result;

}

console.log(isGoodMatch([1,2,3,4]))
