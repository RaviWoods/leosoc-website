//  Generate a session object containing name, location and time
function session(name, location, time) {
  //  Set location and time to empty strings if not passed arguments
  location = (typeof location === "undefined") ? "" : location;
  time     = (typeof time     === "undefined") ? "" : time;
  return {name : name, location : location, time : time};
}

//  Generate a 'session schedule' from a session list and a startdate
//  (For now assumes sessions are seperated by exactly a week)
function sessionSchedule(sessions, startDate) {
  return {sessions : sessions, startDate : startDate};
}
