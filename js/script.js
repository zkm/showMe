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
function showMe(showZone, startTime, endTime) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Adding 1 to match date format
  const currentDay = currentDate.getDate();
  const formattedCurrentDate = `${currentYear}${addZeroToDate(
    currentMonth
  )}${addZeroToDate(currentDay)}`;

  startTime = convertThisDate(startTime);
  endTime = convertThisDate(endTime);

  if (PFurlGrab[1] !== undefined) {
    formattedCurrentDate = convertThisDate(PFurlGrab[1]);
    previewPlease = true;
  }

  if (startTime <= formattedCurrentDate && endTime >= formattedCurrentDate) {
    document.addEventListener("DOMContentLoaded", () => {
      const elements = document.querySelectorAll(`.hide#${showZone}`);
      elements.forEach((element) => {
        element.style.display = "block";
      });
    });
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      const elements = document.querySelectorAll(`.hide#${showZone}`);
      elements.forEach((element) => {
        element.style.display = "none";
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hide");
  elements.forEach((element) => {
    const showZone = element.id;
    const startTime = element.dataset.start;
    const endTime = element.dataset.end;
    showMe(showZone, startTime, endTime);
  });
});
