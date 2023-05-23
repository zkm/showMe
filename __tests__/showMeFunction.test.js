const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

// Create a mock HTMLElement with a valid style property
class MockHTMLElement {
  constructor() {
    this.style = {};
  }
}

describe("showMe function", () => {
  let window;
  let document;
  let showMe;

  beforeAll(() => {
    const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>", {
      runScripts: "dangerously",
      resources: "usable",
      beforeParse(window) {
        // Mock the HTMLElement and add it to the global object
        window.HTMLElement = MockHTMLElement;
      },
    });

    window = dom.window;
    document = window.document;
    global.window = window;
    global.document = document;

    const scriptCode = fs.readFileSync(
      path.resolve(__dirname, "../src/js/script.js"),
      "utf-8"
    );
    window.eval(scriptCode);

    const styles = fs.readFileSync(
      path.resolve(__dirname, "../src/css/styles.css"),
      "utf-8"
    );
    const styleElement = window.document.createElement("style");
    styleElement.innerHTML = styles;
    window.document.head.appendChild(styleElement);

    showMe = window.showMe;
  });

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="hide" id="div_1" data-start="5/1/2023" data-end="5/15/2050">Block 1</div>
      <div class="hide" id="div_2" data-start="6/3/2012" data-end="6/16/2012">Block 3</div>
    `;
  });

  test("displays the element when date conditions are met", () => {
    showMe("div_1", "5/1/2023", "5/15/2050");
    expect(document.getElementById("div_1").style.display).toBe("block");
  });

  test("does not display the element when date conditions are not met", () => {
    showMe("div_2", "6/3/2012", "6/16/2012");
    expect(document.getElementById("div_2").style.display).toBe("none");
  });
});
