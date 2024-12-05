// sort the two lists

// figure out how far apart list1[index] is with list2[index] as we iterate, can use Math.?? for this?

import { readFile } from "fs/promises";

const readInputFile = async () => {
  try {
    const data = await readFile("./input.txt", "utf-8");

    const arr1 = [];
    const arr2 = [];
    const text = data.toString().split("\n");
    const finalText = text.map((item) => item.split(/\s+/)).flat(Infinity);

    const prepareData = () => {
      finalText.map((item, index) => {
        if (index % 2 === 0) {
          arr1.push(Number(item));
        }
        if (index % 2 !== 0) {
          arr2.push(Number(item));
        }
      });
    };

    if (data.length > 0) {
      prepareData();
    }

    arr1.pop();
    arr1.sort();
    arr2.sort();

    let result = 0;

    const addDifferences = () => {
      for (let i = 0; i < arr1.length; i++) {
        result += Math.abs(arr1[i] - arr2[i]);
      }
    };

    addDifferences();

    // PART TWO 1. go through arr1, get the count of curent item found in the other list. Take that count and multiply it by current item in arr1

    // The first number in the left list is 3. It appears in the right list three times, so the similarity score increases by 3 * 3 = 9.
    // The third number in the left list is 2. It does not appear in the right list, so the similarity score does not increase (2 * 0 = 0).

    const calculateSimilarity = () => {
      arr1.map((item) => {
        let count = 0;

        // arr2.map((item2) => {
        //   if (item === item2)
        // })
      });
    };

    console.log("result", result);
  } catch (err) {
    console.error("Error reading file:", err);
  }
};

readInputFile();

const list1 = [3, 4, 2, 1, 3, 3];
const list2 = [4, 3, 5, 3, 9, 3];

// find the # of occurences of each item in list one found in list

const findOccurences = () => {
  const dictionary = {};

  list1.map((item1) => {
    // build our dict
    if (!dictionary[item1]) {
      dictionary[item1] = 0;
    }

    list2.map((item2) => {
      if (item1 === item2) {
        dictionary[item1]++;
      }
    });
  });

  const counts = Object.values(dictionary).reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return counts;
};

findOccurences();
