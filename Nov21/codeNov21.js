// You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price.

// Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".

function mostExpensive(obj = { "Old Watch": 500 }) {
  const entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  return `The most expensive item is ${entries[0][0]} with a price of ${entries[0][1]}.`;
}

console.log(mostExpensive());

module.exports = mostExpensive;

// mostExpensive({
//   "Silver Bracelet": 280,
//   "Gemstone Earrings": 180,
//   "Diamond Ring": 3500
// }) ➞ "The most expensive one is the Diamond Ring"
