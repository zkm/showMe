const { JSDOM } = require('jsdom');
const { showMe } = require('../src/js/script');

// Initialize JSDOM
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

describe("showMe function", () => {
  let mockElement;

  beforeEach(() => {
    // Create a mock element
    mockElement = document.createElement('div');
    mockElement.id = "mockElement";
    mockElement.style.display = "none";
    document.body.appendChild(mockElement);
  });

  test("displays the element when date conditions are met", () => {
    // Set the current date to be within the specified range
    const currentDate = new Date("2023-05-15");
    global.Date = jest.fn(() => currentDate);

    // Call the showMe function
    showMe("mockElement", "2023-05-01", "2023-05-31");

    // Expect the element's display style to be "block"
    expect(mockElement.style.display).toBe("block");
  });

  test("does not display the element when date conditions are not met", () => {
    // Set the current date to be outside the specified range
    const currentDate = new Date("2023-06-01");
    global.Date = jest.fn(() => currentDate);

    // Call the showMe function
    showMe("mockElement", "2023-05-01", "2023-05-31");

    // Expect the element's display style to be "none"
    expect(mockElement.style.display).toBe("none");
  });

  afterEach(() => {
    // Clean up the mock element
    document.body.removeChild(mockElement);
    mockElement = null;
  });
});
