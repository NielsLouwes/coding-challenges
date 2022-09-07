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
  return filterSubstring;
}

module.exports = checkSubstringIncluded;