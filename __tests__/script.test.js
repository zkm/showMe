// Get the current date
const nowDate = new Date();

// Flag to indicate preview mode
let previewPlease = false;

// Add leading zero to a number if it has only one digit
const addZeroToDate = (checkThisVar) => {
  return checkThisVar.toString().padStart(2, "0");
};

// Convert date from "mm/dd/yyyy" format to "yyyymmdd"
const convertDateToYYYYMMDD = (dateToConvert) => {
  const [month, day, year] = dateToConvert.split("/");
  return `${year}${month}${day}`;
};

// Show or hide element based on start and end dates
const showMe = (showZone, startTime, endTime) => {
  const SLYear = nowDate.getFullYear();
  let SLMonth = nowDate.getMonth() + 1;
  let SLDay = nowDate.getDate();

  SLMonth = addZeroToDate(SLMonth);
  SLDay = addZeroToDate(SLDay);

  const runAtDate = `${SLYear}${SLMonth}${SLDay}`;

  startTime = convertDateToYYYYMMDD(startTime);
  endTime = convertDateToYYYYMMDD(endTime);

  const urlParams = new URLSearchParams(location.search);
  const showmeParam = urlParams.get("showme");

  if (showmeParam !== null) {
    previewPlease = true;
  }

  if (startTime <= runAtDate && endTime >= runAtDate) {
    const elements = document.querySelectorAll(`.hide#${showZone}`);
    elements.forEach((element) => {
      element.style.display = "block";
    });
  }
};

// Unit tests using Jest
describe("Date Utility Functions", () => {
  test("addZeroToDate adds leading zero to single-digit numbers", () => {
    expect(addZeroToDate(5)).toBe("05");
    expect(addZeroToDate(9)).toBe("09");
    expect(addZeroToDate(12)).toBe("12");
  });

  test("convertDateToYYYYMMDD converts date format correctly", () => {
    expect(convertDateToYYYYMMDD("05/01/2023")).toBe("20230501");
    expect(convertDateToYYYYMMDD("06/30/2023")).toBe("20230630");
    expect(convertDateToYYYYMMDD("12/25/2023")).toBe("20231225");
  });
});

// Integration test for showMe function
describe("showMe function", () => {
  let elements;
  let elementStub;

  beforeAll(() => {
    elements = [];
    elementStub = document.createElement("li");
    elementStub.classList.add("hide");
    elements.push(elementStub);
    document.querySelectorAll = jest.fn().mockReturnValue(elements);
  });

  test("showMe displays the element when date conditions are met", () => {
    const showZone = "div_1";
    const startTime = "05/01/2023";
    const endTime = "05/15/2050";
    nowDate.getMonth = jest.fn().mockReturnValue(4); // May (zero-based index)
    nowDate.getDate = jest.fn().mockReturnValue(1); // 1st of May
    showMe(showZone, startTime, endTime);
    expect(elementStub.style.display).toBe("block");
  });

  test("showMe does not display the element when date conditions are not met", () => {
    const showZone = "div_2";
    const startTime = "06/29/2022";
    const endTime = "06/30/2023";
    nowDate.getMonth = jest.fn().mockReturnValue(5); // June (zero-based index)
    nowDate.getDate = jest.fn().mockReturnValue(1); // 1st of June
    showMe(showZone, startTime, endTime);
    expect(elementStub.style.display).toBe("");
  });
});
