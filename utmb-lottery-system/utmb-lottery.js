const participants = [
    {
        name: 'Steve',
        tokens: 3,
    },
    {
        name: 'John',
        tokens: 2,
    },
    {
        name: 'Jane',
        tokens: 1,
    },
    {
        name: 'Jim',
        tokens: 8,
    },
    {
        name: 'Jill',
        tokens: 5,
    },
    {
        name: 'Jack',
        tokens: 2,
    },
    {
        name: 'Janet',
        tokens: 0,
    },
    {
        name: 'Tom',
        tokens: 2,
    },
]

// solution 1 = for each token number, place that name in the array - BAD TIME COMPLEXITY

const createLotteryList = () => {
  const userList = [];
 
  participants.map((person) => {
   const tokenCount = person.tokens;

   for (let i = 0; i < tokenCount; i++) {
     userList.push(person.name)
    }
  })

  return userList;
}

const lotteryList = createLotteryList();

const getWinner = () => {
  const winner = Math.floor(Math.random() * lotteryList.length)
  const result = lotteryList[winner]
  
  console.log(`The winner is ${result}`)
  return result;
}

// getWinner()

// solution 2 - better time complexity - weighted random selection

const createWeightedDistribution = () => {
  // step 1: get total weight of participant tokens
  let totalWeight = participants.reduce((acc, curr) => acc + curr.tokens, 0);
  // generate a random number in the range of 0 - total tokens
  const generateRandomNumber = Math.floor(Math.random() * totalWeight);
  
  let runningSum = 0;
 // step 3: iterate over participans, adding their token to total sum
  for (let person of participants){
    runningSum += person.tokens;
    // step 4: if the randomNumber is less than runningSUM, that means we hit our winner
    if (generateRandomNumber < runningSum) {
        return `The winner is ${person.name}!`;
    }
  }
}

console.log(createWeightedDistribution())
