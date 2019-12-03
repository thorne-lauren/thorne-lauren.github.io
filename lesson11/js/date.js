//get current date info
var today = new Date();

//array for day names
var dayList =  [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

//array for month names
var monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

//uses array to get current day name
var day = dayList[today.getDay()];

//uses array to get current month name
var month = monthList[today.getMonth()];

//display
document.getElementById("currentDate").innerHTML = day + ", " + today.getDate() + " " + month + " " + today.getFullYear();
