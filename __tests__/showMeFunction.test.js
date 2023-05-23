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

  beforeAll(() => {
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
      runScripts: "dangerously",
      resources: "usable",
      beforeParse(window) {
        // Mock the HTMLElement and add it to the global object
        window.HTMLElement = MockHTMLElement;
      },
    });

    window = dom.window;
    global.window = window;
    global.document = window.document;

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
  });

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="hide" id="div_1" data-start="05/01/2023" data-end="05/15/2050">Date: 05/01/2023 - 05/15/2050</div>
      <div class="hide" id="div_2" data-start="06/29/2022" data-end="06/30/2023">Date: 06/29/2022 - 06/30/2023</div>
      <div class="hide" id="div_3" data-start="06/03/2012" data-end="06/16/2012">Date: 06/03/2012 - 06/16/2012</div>
    `;
  });

  test("displays the element when date conditions are met", () => {
    showMe("div_1");
    expect(document.getElementById("div_1").style.display).toBe("block");
  });

  test("does not display the element when date conditions are not met", () => {
    showMe("div_2");
    expect(document.getElementById("div_2").style.display).toBe("none");
  });
});
