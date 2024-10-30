// return the best poker hands,
// suits = a,b,c,d
// ranks is up to 13 cards 1 through 13

const bestHand = (ranks, suits) => {
  let suitMap = {};
  let ranksMap = {};

  suits.map((suit) => {
    if (!suitMap[suit]) {
      suitMap[suit] = 1;
    } else {
      suitMap[suit]++;
    }
  });

  ranks.map((rank) => {
    if (!ranksMap[rank]) {
      ranksMap[rank] = 1;
    } else {
      ranksMap[rank]++;
    }
  });

  const hasFlush = Object.values(suitMap).some((count) => count >= 5);
  const threeOfAKind = Object.values(ranksMap).some((count) => count >= 3);
  const pair = Object.values(ranksMap).some((count) => count === 2);

  if (hasFlush) {
    return "Flush";
  }

  if (threeOfAKind) {
    return "Three of a Kind";
  }

  if (pair) return "Pair";

  return "High Card";
};

console.log(bestHand([1, 2, 3, 4], ["a", "a", "b", "a", "a"]));
