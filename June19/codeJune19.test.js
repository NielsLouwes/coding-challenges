const nearestChapter = require("./codeJune19");

describe("NearestChapter function", () => {
  test("that the function returns the nearest chapter based on page number entered", () => {
    expect(
      nearestChapter(
        {
          "New Beginnings": 1,
          "Strange Developments": 62,
          "The End?": 194,
          "The True Ending": 460
        },
        200
      )
    ).toEqual("The End?");
  });

  test("that the function returns the chapter with the most page numbers if the page number entered is equidistant from two chapters", () => {
    expect(
      nearestChapter(
        {
          "New Beginnings": 1,
          "Strange Developments": 3,
          "The End?": 7,
          "The True Ending": 13
        },
        2
      )
    ).toEqual("Strange Developments");
  });

  test("that the function returns the first chapter if a negative value is given", () => {
    expect(
      nearestChapter(
        {
          "New Beginnings": 1,
          "Strange Developments": 3,
          "The End?": 7,
          "The True Ending": 13
        },
        -1
      )
    ).toEqual("New Beginnings");
  });
});
