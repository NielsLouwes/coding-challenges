function checkSubstringIncluded(S, K) {
  const filterSubstring = S.filter((item) => {
    if (item.toLowerCase().includes(K.toLowerCase())) {
      return item;
    }
    if (
      item.toLowerCase().charAt(0) == K.toLowerCase().charAt(0) &&
      item.toLowerCase().charAt(1) == item.toLowerCase().charAt(1)
    ) {
      return item;
    }
  });
  console.log('filterSubstring', filterSubstring);
 
  return filterSubstring;
}



//checking it with input now
console.log(
  "CHECK SOLUTION WITH INPUT",
  checkSubstringIncluded(
    ["Wearable", "Blind", "BLE Transit", "Camera", "Play Games", "Pokemon Go"],
    "PG"
  )
);

module.exports = checkSubstringIncluded;