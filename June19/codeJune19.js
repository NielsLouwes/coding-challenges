const nearestChapter = (chapters, pageNumber) => {
  let sortedChapters = Object.entries(chapters).sort((a, b) => a[1] - b[1]);
  console.log("sortedChapter", sortedChapters);
  let closestChapter = null;
  let closestDifference = Infinity;
  let maxPages = 0;

  for (let i = 0; i < sortedChapters.length; i++) {
    let currentChapter = sortedChapters[i];
    let nextChapter = sortedChapters[i + 1];

    let currentDifference = Math.abs(pageNumber - currentChapter[1]);
    let currentPages = nextChapter
      ? nextChapter[1] - currentChapter[1]
      : Infinity;

    if (
      currentDifference < closestDifference ||
      (currentDifference === closestDifference && currentPages > maxPages)
    ) {
      closestChapter = currentChapter;
      closestDifference = currentDifference;
      maxPages = currentPages;
    }
  }

  return closestChapter[0];
};

module.exports = nearestChapter;

