const analyzeContent = require("./codeAug7");

describe("analyzeContent", () => {
  test("should identify text and count lines", () => {
    const result = analyzeContent("this is a test\nSeems to work");
    expect(result).toEqual({
      contentType: "TEXT",
      lineNumber: 2
    });
  });

  test("should identify single line text", () => {
    const result = analyzeContent("this is a test");
    expect(result).toEqual({
      contentType: "TEXT",
      lineNumber: 1
    });
  });

  test("should identify CSS and count selectors", () => {
    const result = analyzeContent("body{blabla} a{color:#fff} a{ padding:0}");
    expect(result).toEqual({
      contentType: "CSS",
      cssTargets: {
        body: 1,
        a: 2
      }
    });
  });

  test("should identify HTML and count tags", () => {
    const result = analyzeContent("<html><div></div><div></div></html>");
    expect(result).toEqual({
      contentType: "HTML",
      htmlTags: {
        html: 1,
        div: 2
      }
    });
  });

  test("should return undefined for unknown format", () => {
    const result = analyzeContent("");
    expect(result).toBe("This is not a supported format");
  });

  // Add more tests as needed
});
