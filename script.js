




// const interval = setInterval(function(){
//   currentUtcTimePara.textContent = currentUtcTime
// }, 100)

const interval = setInterval(function() {
// get the ccurent day
let currentDayPara = document.getElementById("current_day");
let allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let theDate = new Date();
let currentDay = allDays[theDate.getDay()];
currentDayPara.textConten = currentDay;

//get the current utc time
let currentUtcTimePara = document.getElementById("utc_time");

function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

let h = addZero(theDate.getUTCHours());
let m = addZero(theDate.getUTCMinutes());
let s = addZero(theDate.getUTCSeconds());
let currentUtcTime = h + ":" + m + ":" + s;
currentUtcTimePara.innerText = currentUtcTime
},
 1000);

// clearInterval(interval)