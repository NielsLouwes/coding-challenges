const colorPatternTimes = (colors = []) => {
  let totalSeconds = 0;
  const returnSeconds = colors.length * 2;

  for (let i = 0; i < colors.length - 1; i++) {
    if (colors[i + 1] !== colors[i]) {
      totalSeconds++;
    }
  }

  return totalSeconds + returnSeconds;
};

module.exports = colorPatternTimes;
