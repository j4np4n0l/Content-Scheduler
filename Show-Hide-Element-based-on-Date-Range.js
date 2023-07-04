// 1st parameter, ID name ("#elementName") / Class name (".elementName")
// 2nd parameter, start date to show the element => YYYY-MM-DD hh:mm
// 3rd parameter, end date to show the element => YYYY-MM-DD hh:mm
scheduleContent("#elementName", "2023-07-01 00:00", "2023-07-31 23:59");

function scheduleContent(elementID, startDateTime, endDateTime) {

  const content = document.querySelector(elementID);
  const startDate = startDateTime;
  const endDate = endDateTime;

  //console.log("Start:" + startDate, "End:" + endDate);

  if ( isWithinDateRange() ) {
    console.log("Display:", content);
  } else {
    console.log("Hidden:", content);
    content.style.display = "none";
  }

  function isWithinDateRange() {
    
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();

    todayTime = currentHour + ":" + currentMinute;
    const todayDate = new Date().toISOString().slice(0, 10);

    today = todayDate + " " + todayTime;

    //console.log(today);
    return today >= startDateTime && today <= endDateTime;

  }
}