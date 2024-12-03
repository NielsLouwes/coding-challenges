// sort the two lists

// figure out how far apart list1[index] is with list2[index] as we iterate, can use Math.?? for this?

import { readFile } from "fs/promises";

const readInputFile = async () => {
  try {
    const data = await readFile("./input.txt", "utf-8");

    const arr1 = [];
    const arr2 = [];
    const text = data.toString().split("\n");
    const finalText = text.map((item) => item.split(/\s+/));

    // push every odd index into arr 1
    // push every even index into arr 2

    const prepareData = () => {
      finalText.map((item, index) => {
        arr1.push(item[0]);
        arr2.push(item[1]);
      });
    };

    if (data.length > 0) {
      prepareData();
    }
    // console.log("File content:", finalText);

    arr1.sort();
    arr2.sort();

    console.log("arr1", arr1);
    console.log("arr2", arr2);

    console.log(Math.abs(3 - 1));
  } catch (err) {
    console.error("Error reading file:", err);
  }
};

readInputFile();
