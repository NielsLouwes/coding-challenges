// /*
// The levels are either all increasing or all decreasing.

// Any two adjacent levels differ by at least one and at most three.

// */

// import { readFile } from "fs/promises";

// const readFileContent = async () => {
//   try {
//     const data = await readFile("./input.txt", "utf-8");

//     const prepData = data.split("\n").map((item) => {
//       return item.split(" ").map(Number);
//     });

//     // console.log("prepData", prepData);
//     // const singleArr = prepData[0];
//     // console.log("singleArr", singleArr);

//     // let count = 0;

//     // // checks if all items are greater
//     // for (let i = 0; i < singleArr.length; i++) {
//     //   if (singleArr[i] > singleArr[i + 1]) {
//     //     count++;
//     //   }
//     // }
//     // console.log("count", count);

//     // if count === item.length (5), then all ascending and TRUE, otherwise false
//     const checkAscendingOrDescending = () => {
//       let safeReports = 0;
//       let unsafeReports = 0;

//       prepData.forEach((subArr) => {
//         let isAscending = true;
//         let isDescending = true;
//         let isValidDiff = true;

//         for (let i = 0; i < subArr.length - 1; i++) {
//           const diff = Math.abs(subArr[i] - subArr[i + 1]);
//           if (subArr[i] < subArr[i + 1]) {
//             isDescending = false; // false if any item is less than the next - doesn't meet the check
//           } else if (subArr[i] > subArr[i + 1]) {
//             isAscending = false; // false if any item is more then the next - doesn't meet the check
//           }
//           if (diff < 1 || diff > 3) {
//             isValidDiff = false;
//           }
//         }

//         if (isAscending || (isDescending && isValidDiff)) {
//           safeReports++;
//         } else {
//           unsafeReports++;
//         }
//       });

//       console.log("safeReports", safeReports);
//       console.log("unsafeRepotrs", unsafeReports);
//       const x = Math.abs(1, 3);
//       console.log("x", x);
//     };

//     checkAscendingOrDescending();

//     // if current item < next item + 1 OR curr item > next item

//     const testIfSorted = () => {
//       prepData.map((item, index) => {});
//     };

//     testIfSorted();
//     // console.log("data", data);
//   } catch (err) {
//     console.error("Error reading file:", err);
//   }
// };

// readFileContent();

import path from "path";
import fs from "fs";

export const input = fs
  .readFileSync(path.join(import.meta.dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((line) => {
    const nums = line.split(/\s+/).map((v) => parseInt(v, 10));
    return nums;
  });

function isReportSafe(report) {
  const [first, second] = report;

  let isIncreasing = first < second;
  let isDecreasing = second < first;

  if (!isIncreasing && !isDecreasing) {
    return false;
  }

  for (let i = 0; i < report.length - 1; i++) {
    const current = report[i];
    const next = report[i + 1];

    if (isIncreasing && !(next > current)) {
      return false;
    }

    if (isDecreasing && !(next < current)) {
      return false;
    }

    const diff = Math.abs(current - next);

    if (diff < 1 || diff > 3) {
      return false;
    }
  }

  // If we are here, the report passes!
  return true;
}

function tolerableIsReportSafe(report) {
  if (isReportSafe(report)) {
    return true;
  }

  for (let i = 0; i < report.length; i++) {
    const trimmedReport = report.slice();
    trimmedReport.splice(i, 1);

    if (isReportSafe(trimmedReport)) {
      return true;
    }
  }

  return false;
}

const partOne = input.filter((report) => isReportSafe(report)).length;
console.log("Part One:", partOne);

const partTwo = input.filter((report) => tolerableIsReportSafe(report)).length;
console.log("Part Two:", partTwo);
