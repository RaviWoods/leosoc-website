//  The start date of the first session in term
//  We set the time to 8:30 when the session ends so that's when the
//  site ticks over
//  Note: if entering dates months start at 0
var spring2017StartDate = new Date(2017, 0, 16, 20, 30, 0, 0);
var spring2017List = [
  session("watercolour portraits"),
  session("life drawing"),
  session("introduction to oils"),
  session("life drawing"),
  session("pencil drawing: 'drawing on the right side of the brain'"),
  session("clay gnomes, collab with mentality"),
  session("watercolours"),
  session("acrylics"),
];
var spring2017 = sessionSchedule(spring2017List, spring2017StartDate);

var summer2017StartDate = new Date(2017, 4, 5, 9, 30, 0, 0);
var summer2017List = [
  session("emotion: line & colour",        "SW7 studio", "6:30 onwards"),
  session("collective imagination",        "SW7 studio", "6:30 onwards"),
  session("emotion: line & colour",        "SW7 studio", "6:30 onwards"),
  session("generating art",                "SW7 studio", "6:30 onwards"),
  session("mandala",                       "SW7 studio", "6:30 onwards"),
  session("painting & tessellating tiles", "SW7 studio", "6:30 onwards"),
  session("frottage",                      "SW7 studio", "6:30 onwards"),
  session("end of term social!",           "beit quad",  "6:30 onwards"),
];
var summer2017 = sessionSchedule(summer2017List, summer2017StartDate);

// Maybe add something so all schedules appended automatically and right one chosen?
var currentSchedule = summer2017;
