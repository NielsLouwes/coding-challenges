/*
The levels are either all increasing or all decreasing.

Any two adjacent levels differ by at least one and at most three.

*/

import { readFile } from "fs/promises";

const readFileContent = async () => {
  try {
    const data = readFile("./input.txt", "utf-8");
    const preparedData = [];

    const text = (await data).toString().split("\n");
    text.map((item) => {
      preparedData.push([item]);
    });

    console.log("preparedData", preparedData);
  } catch (err) {
    console.error("Error reading file:", err);
  }
};

readFileContent();
