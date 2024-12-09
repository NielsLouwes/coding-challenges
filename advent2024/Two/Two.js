/*
The levels are either all increasing or all decreasing.

Any two adjacent levels differ by at least one and at most three.

*/

import { readFile } from "fs/promises";

const readFileContent = async () => {
  try {
    const data = await readFile("./input.txt", "utf-8");

    const prepData = data.split("\n").map((item) => {
      return item.split(" ").map(Number);
    });
    console.log("prepData", prepData);

    // const testIfSorted = () => {
    //   preparedData.every((item, index) => {
    //     console.log("item, item + 1", item, item + 1);
    //   });
    // };

    // testIfSorted();
    // console.log("data", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
};

readFileContent();
