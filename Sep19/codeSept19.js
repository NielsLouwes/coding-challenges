function pigIt(str) {
  if (!str || str.length < 1) {
    return;
  }
  const solution = str.split(' ').map((item) => item.substr(1) + item[0] + 'ay').join(' ');
  return solution;
}

module.exports = pigIt;