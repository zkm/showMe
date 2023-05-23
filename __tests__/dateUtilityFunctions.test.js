const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

// Create a mock HTMLElement with a valid style property
class MockHTMLElement {
  constructor() {
    this.style = {};
  }
}

describe("Date Utility Functions", () => {
  let window;
  let addZeroToDate;
  let convertDateToYYYYMMDD;

  beforeAll(() => {
    const dom = new JSDOM();
    window = dom.window;
    global.window = window;
    global.document = window.document;
    global.HTMLElement = MockHTMLElement;

    const scriptCode = fs.readFileSync(
      path.resolve(__dirname, "../js/script.js"),
      "utf-8"
    );
    window.eval(scriptCode);
    addZeroToDate = window.addZeroToDate;
    convertDateToYYYYMMDD = window.convertDateToYYYYMMDD;
  });

  describe("addZeroToDate", () => {
    test("adds leading zero to single-digit numbers", () => {
      expect(addZeroToDate(5)).toBe("05");
      expect(addZeroToDate(9)).toBe("09");
    });
  });

  describe("convertDateToYYYYMMDD", () => {
    test("converts date format correctly", () => {
      expect(convertDateToYYYYMMDD("05/01/2023")).toBe("20230501");
      expect(convertDateToYYYYMMDD("06/30/2023")).toBe("20230630");
    });
  });
});

describe("showMe function", () => {
  let window;

  beforeAll(() => {
    const dom = new JSDOM();
    window = dom.window;
    global.window = window;
    global.document = window.document;
    global.HTMLElement = MockHTMLElement;

    const scriptCode = fs.readFileSync(
      path.resolve(__dirname, "../js/script.js"),
      "utf-8"
    );
    window.eval(scriptCode);

    const styles = fs.readFileSync(
      path.resolve(__dirname, "../css/styles.css"),
      "utf-8"
    );
    const styleElement = window.document.createElement("style");
    styleElement.innerHTML = styles;
    window.document.head.appendChild(styleElement);
  });

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="hide" id="div_1" data-start="05/01/2023" data-end="05/15/2050">Date: 05/01/2023 - 05/15/2050</div>
      <div class="hide" id="div_2" data-start="06/29/2022" data-end="06/30/2023">Date: 06/29/2022 - 06/30/2023</div>
      <div class="hide" id="div_3" data-start="06/03/2012" data-end="06/16/2012">Date: 06/03/2012 - 06/16/2012</div>
      <div class="hide" id="div_4" data-start="06/17/2012" data-end="06/30/2012">Date: 06/17/2012 - 06/30/2012</div>
    `;
  });

  test("displays the element when date conditions are met", () => {
    window.showMe("div_1");
    expect(document.getElementById("div_1").style.display).toBe("block");
  });

  test("does not display the element when date conditions are not met", () => {
    window.showMe("div_2");
    expect(document.getElementById("div_2").style.display).toBe("none");
  });
});
