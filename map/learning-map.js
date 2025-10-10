/*
A MAP is a key value store that can store anything as keys
It allows only unique keys, by automatically overwriting previous keys of the same name




*/

const salesData = [
    { product: "Shoes", region: "Europe", amount: 120 },
    { product: "Shoes", region: "Asia", amount: 90 },
    { product: "Shirt", region: "Europe", amount: 60 },
    { product: "Shoes", region: "Europe", amount: 40 },
    { product: "Shirt", region: "Asia", amount: 100 },
    { product: "Hat", region: "US", amount: 30 },
    { product: "Shoes", region: "US", amount: 70 }
  ];
  
  // 1. Group the sales by product and add up amounts
  
  const productMap = new Map();
  // .set adds a new item to the map
  // .get get an item from the map
 
  const prepareProducts = () => {
     salesData.forEach((item) => {
        const currentTotal = productMap.get(item.product) || 0; // retrieve current total
        console.log('currentTotal', currentTotal)

       productMap.set(item.product, currentTotal + item.amount)
     })
  }

  prepareProducts()

  console.log('productMap', productMap)

  // return the count of each word

  const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

  const returnCount = () => {
    const wordCount = new Map();

    words.forEach((word) => {
        let currentTotal = wordCount.get(word) || 0;

        wordCount.set(word , currentTotal + 1)
    }) 

    return wordCount;
  }

  console.log(returnCount());

  // 2. count letters in a string
  const text = 'hello world';

  const countLetters = () => {
    const letterCount = new Map();

    const chars = text.split('').filter((letter) => letter.trim());

    chars.forEach((letter) => {
        let currentTotal = letterCount.get(letter) || 0

        letterCount.set(letter , currentTotal + 1)
    })

    return letterCount;
  }

  const letters = countLetters();

const keys = letters.keys();
const values = letters.values();
console.log('key', keys);
console.log('values', values)

// return total word count
const totalWordCount = [...letters.values()].reduce((acc, curr) => acc + curr);
console.log('totalWordCount', totalWordCount)

// 3. Replace a plain object with a MAP

const countryCodes = {
    NL: "Netherlands",
    DE: "Germany",
    FR: "France"
  };
  


