// Get the current date
const nowDate = new Date();

// Flag to indicate preview mode
let previewPlease = false;

// Add leading zero to a number if it has only one digit
const addZeroToDate = (checkThisVar) => {
  return checkThisVar.toString().padStart(2, '0');
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

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hide");
  elements.forEach((element) => {
    const showZone = element.id;
    const startTime = element.dataset.start;
    const endTime = element.dataset.end;
    showMe(showZone, startTime, endTime);
  });
});
