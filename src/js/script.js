const addZeroToDate = (number) => {
  return number < 10 ? `0${number}` : `${number}`;
};

function convertDateToYYYYMMDD(dateString) {
  const dateParts = dateString.split("/");
  const year = dateParts[2];
  const month = addZeroToDate(dateParts[0]);
  const day = addZeroToDate(dateParts[1]);
  return `${year}${month}${day}`;
}

function showOrHideElement(elementId, startDate, endDate) {
  const currentDate = new Date();
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  if (!isNaN(startDateObj) && !isNaN(endDateObj) && currentDate >= startDateObj && currentDate <= endDateObj) {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.display = "block";
    }
  } else {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hide");
  elements.forEach((element) => {
    const showZone = element.id;
    const startTime = element.dataset.start;
    const endTime = element.dataset.end;
    showOrHideElement(showZone, startTime, endTime);
  });
});

// Expose showMe globally for browser and test compatibility
if (typeof window !== 'undefined') {
  window.showMe = showOrHideElement;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    addZeroToDate,
    convertDateToYYYYMMDD,
    showOrHideElement
  };
}
