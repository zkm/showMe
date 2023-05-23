var nowDate = new Date();
var PFurlGrab = location.search.substr(1).split("showme=");
var previewPlease = false;

function addZeroToDate(checkThisVar) {
  checkThisVar += "";
  if (checkThisVar.length == 1) {
    checkThisVar = "0" + checkThisVar;
  }
  return checkThisVar;
}

function convertThisDate(dateToConvert) {
  var startSplit = dateToConvert.split("/");
  dateToConvert = startSplit[2] + startSplit[0] + startSplit[1];
  return dateToConvert;
}

function showMe(showZone, startTime, endTime) {
  var SLYear = nowDate.getFullYear();
  var SLMonth = nowDate.getMonth();
  SLMonth += 1;
  var SLDay = nowDate.getDate();
  SLMonth = addZeroToDate(SLMonth);
  SLDay = addZeroToDate(SLDay);
  var runAtDate = "" + SLYear + SLMonth + SLDay;
  startTime = convertThisDate(startTime);
  endTime = convertThisDate(endTime);
  if (PFurlGrab[1] != undefined) {
    runAtDate = PFurlGrab[1];
    runAtDate = convertThisDate(runAtDate);
    previewPlease = true;
  }
  //alert("starTime:"+startTime+" runTime:" + runAtDate + " endTime:"+endTime);
  if (startTime <= runAtDate && endTime >= runAtDate) {
    document.addEventListener("DOMContentLoaded", function () {
      var elements = document.querySelectorAll(".hide#" + showZone);
      elements.forEach(function (element) {
        element.style.display = "block";
      });
    });
  }
}
