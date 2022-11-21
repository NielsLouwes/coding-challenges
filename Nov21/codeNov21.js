function mostExpensive(obj = { Watch: 500 }) {
  const pricy = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
  return `The most expensive one is the ${pricy}.`;
}

module.exports = mostExpensive;
