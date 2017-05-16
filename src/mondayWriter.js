var currentDate = new Date();

function daysBetween(date1, date2) {
  //  A single day in milliseconds
  var oneDay = 1000 * 60 * 60 * 24;

  var date1Ms = date1.getTime();
  var date2Ms = date2.getTime();

  var differenceMs = date2Ms - date1Ms;

  // Return difference in days
  return Math.floor(differenceMs / oneDay);
}

//  Find the session to display always rounding to the next week
//
//  sesssionsList is defined in data/sessionList.js
//
function closestSession(testDate, sessionSchedule) {

  var startDate = sessionSchedule.startDate;
  var sessionsList = sessionSchedule.sessions;

  var daysDiff = daysBetween(startDate, testDate);
  if (daysDiff < 0) return sessionsList[0];

  var index = Math.floor(1 + daysDiff / 7);

  if (index >= sessionsList.length) {
    return undefined;	//  Is this bad javscript practise?
  }
  return sessionsList[index];
}

function setSession(session) {
  var sessionText = "";
  var defaultLocation = "EEE 403a"
  var defaultTime = "6:30 - 8:30";

  if (typeof session === undefined || session === {}) {
    sessionText = "no more sessions this term!";
    sessionLocation = "";
  }
  else {
    sessionText = session.name;
    sessionLocation = session.location.length > 0 ? session.location : defaultLocation;
    sessionTime     = session.time.length     > 0 ? session.time     : defaultTime;
  }
  
  //  Replace div in html with result from function
  var txt = boldText("next session: " + sessionText) + "<br/>in " + boldText(sessionLocation) + " from " + boldText(sessionTime);
  $("#this_session").append(txt);
}

function boldText(txt) {
  return "<b>" + txt + "</b>";
}

setSession(closestSession(currentDate, currentSchedule));
