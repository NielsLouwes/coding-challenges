import { readFile } from "fs/promises";

// accepted format = mul(2,4) - so mul(number, number)
//filter out all non multiply operations that don't meet that criteria, then multiple what is left and add them together

const readInputFile = async () => {
  try {
    const data = await readFile("./input.txt", "utf-8");

    const regex = /mul\((\d+),\s*(\d+)\)/g;
    const matches = Array.from(data.matchAll(regex));

    const filteredMatches = matches.map((match) => {
      return match[0];
    });
    console.log("Filtered Matches:", filteredMatches); // Log the filtered matches

    let total = 0;

    const returnResults = () => {
      filteredMatches.map((item) => {
        const prep = item.split("mul").slice(1);
        const numbers = prep[0].match(/\d+/g).map(Number);

        let subTotal = numbers[0] * numbers[1];
        total += subTotal;
      });
    };

    returnResults();

    console.log("total", total);
  } catch (err) {
    console.error("Error reading file:", err);
  }
};

readInputFile();
