// Add leading zero to a number if it has only one digit
const addZeroToDate = (checkThisVar) => {
  return number < 10 ? `0${number}` : `${number}`;
};

// Convert date from "mm/dd/yyyy" format to "yyyymmdd"
function convertDateToYYYYMMDD(dateString) {
  const dateParts = dateString.split("/");
  const year = dateParts[2];
  const month = addZeroToDate(dateParts[0]);
  const day = addZeroToDate(dateParts[1]);
  return `${year}${month}${day}`;
}

// Show or hide element based on start and end dates
function showMe(showZone, startTime, endTime) {
  const currentDate = new Date();
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  if (currentDate >= startDate && currentDate <= endDate) {
    document.getElementById(showZone).style.display = "block";
  } else {
    document.getElementById(showZone).style.display = "none";
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

// Export the utility functions and showMe function
module.exports = {
  addZeroToDate,
  convertDateToYYYYMMDD,
  showMe,
};
