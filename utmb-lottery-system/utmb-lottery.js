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
console.log('lotteryList', lotteryList)


const getWinner = () => {
  const winner = Math.floor(Math.random() * lotteryList.length)

  const result = lotteryList[winner]
  console.log('result', `The winner is ${result}`)
  return result;
}

getWinner()

// solution 2 - better time complexity
