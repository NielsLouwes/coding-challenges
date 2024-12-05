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
    // each number each, time so you have unique keys of the same #

    const findOccurences = () => {
      let result = [];

      arr1.forEach((item1) => {
        let count = 0;

        console.log("count", count);

        arr2.forEach((item2) => {
          if (item1 === item2) {
            count++;
          }
        });
        result.push({ [item1]: count * item1 });
      });

      const countValues = result
        .map((obj) => Object.values(obj))
        .flat()
        .reduce((acc, curr) => acc + curr);
      console.log("countValues", countValues);
      console.log("result", result);
    };

    findOccurences();

    // console.log("result", result);
  } catch (err) {
    console.error("Error reading file:", err);
  }
};

readInputFile();

const list1 = [3, 4, 2, 1, 3, 3]; // check item1 (3), count occurrences of 3 in list 2, add it up, return that in an object, where item1 is key, itemCount is value
const list2 = [4, 3, 5, 3, 9, 3];

// find the # of occurences of each item in list one found in list
// 1. first build dictionary with all the numbers in list 1, then do the adding up

// const findOccurences = () => {
//   let result = [];

//   list1.forEach((item1) => {
//     let count = 0;

//     console.log("count", count);

//     list2.forEach((item2) => {
//       if (item1 === item2) {
//         count++;
//       }
//     });
//     result.push({ [item1]: count * item1 });
//   });

//   const countValues = result
//     .map((obj) => Object.values(obj))
//     .flat()
//     .reduce((acc, curr) => acc + curr);
// };

// findOccurences();
