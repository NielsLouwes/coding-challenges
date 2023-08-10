const cssHtmlTags = ["<", ">", "{", "}"];
const cssTags = ["{", "}"];
const htmlTags = ["<", ">"];

const analyzeContent = (content = "") => {
  // Text logic
  if (!content.length) {
    return "This is not a supported format";
  }
  const checkForNewLine = content.split(/\r?\n/); // splits up our text into two array items, counting them
  const splitContent = content.split("");
  console.log("split", splitContent);

  const containsTag = splitContent.some((item) => cssHtmlTags.includes(item)); // returns TRUE if tags are included

  if (!containsTag) {
    return {
      contentType: "TEXT",
      lineNumber: checkForNewLine.length
    };
  }

  // CSS logic
  const containsCssTag = splitContent.some((item) => cssTags.includes(item));
  const cssSelectors = [];

  if (containsCssTag) {
    splitContent.map((item, index) => {
      if (item === "{") {
        const selector = content.slice(0, index).trim().split(" ").pop();
        cssSelectors.push(selector);
      }
    });
  }

  const countCssOccurrences = cssSelectors.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  if (containsCssTag) {
    return {
      contentType: "CSS",
      cssTargets: countCssOccurrences
    };
  }

  // HTML logic
  const containsHTMLTags = splitContent.some((item) => htmlTags.includes(item));

  if (containsHTMLTags) {
    const matches = content.match(/\<(\w+)\>/g);

    // count occurrences
    const htmlTagOccurrences = matches.reduce((acc, tag) => {
      tag = tag.replace(/<|>/g, "");
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});

    return {
      contentType: "HTML",
      htmlTags: htmlTagOccurrences
    };
  }
};

module.exports = analyzeContent;


