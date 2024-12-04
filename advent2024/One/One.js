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

    console.log("result", result);
  } catch (err) {
    console.error("Error reading file:", err);
  }
};

readInputFile();
