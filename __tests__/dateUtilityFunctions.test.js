const jsdom = require("jsdom-global");

// Initialize the DOM environment
const cleanup = jsdom();
const { addZeroToDate, convertDateToYYYYMMDD } = require("../src/js/script");

// Test addZeroToDate function
test("adds leading zero to single-digit numbers", () => {
  expect(addZeroToDate(5)).toBe("05");
  expect(addZeroToDate(9)).toBe("09");
});

// Test convertDateToYYYYMMDD function
test("converts date format correctly", () => {
  expect(convertDateToYYYYMMDD("5/1/2023")).toBe("20230501");
  expect(convertDateToYYYYMMDD("12/31/2022")).toBe("20221231");
});

// Clean up the DOM environment after tests are finished
afterAll(() => {
  cleanup();
});
