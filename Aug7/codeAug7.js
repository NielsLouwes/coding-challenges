const cssHtmlTags = ["<", ">", "{", "}"];

const analyzeContent = (content = "") => {
  if (!content.length) return "This is not a supported format";

  const lines = content.split(/\r?\n/);
  const chars = content.split("");

  if (!chars.some((char) => cssHtmlTags.includes(char))) {
    return {
      contentType: "TEXT",
      lineNumber: lines.length
    };
  }

  if (chars.includes("{")) {
    return analyzeCss(content, chars);
  }

  if (chars.includes("<")) {
    return analyzeHtml(content);
  }
};

const analyzeCss = (content, chars) => {
  const selectors = [];

  chars.forEach((char, index) => {
    if (char === "{") {
      const selector = content.slice(0, index).trim().split(" ").pop();
      selectors.push(selector);
    }
  });

  const count = selectors.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  return {
    contentType: "CSS",
    cssTargets: count
  };
};

const analyzeHtml = (content) => {
  const matches = content.match(/\<(\w+)\>/g);

  const count = matches.reduce((acc, tag) => {
    tag = tag.replace(/<|>/g, "");
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

  return {
    contentType: "HTML",
    htmlTags: count
  };
};

module.exports = analyzeContent;
