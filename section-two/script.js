// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;
const calcAge = (birthYear) => 2024 - birthYear;
console.log(calcAge(2006));
*/
// --------------------------------------------------------
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperaturestwo = [4, 7, 12, 23, 'error', 10, 4, 2, 0, -3, -8];
/*
// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperaturestwo = [4, 7, 12, 23, 'error', 10, 4, 2, 0, -3, -8];
// 1) Understand the problem
// What is the temp amplitude? A: difference between highest and lowest temp.
// How to compute max and min temp?

// Breaking up into sub-problems
// 1. function
// 2. remove error (only accept numbers)
// 3. sort through array to find the largest value and lowest, stored into variables, then largest - smallest equals amplitude.

// ### Solution: ###
const calcAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temperatures.length; i++) {
    const curtemp = temp[i];
    if (typeof curtemp !== 'number') continue;
    if (curtemp > max) {
      max = curtemp;
    }
    if (curtemp < min) {
      min = curtemp;
    }
  }
  console.log(min, max);
  const amplitude = max - min;
  console.log(amplitude);
};
calcAmplitude(temperatures);

// ### Merging 2 arrays ###
const newCalcAmplitude = function (temp1, temp2) {
  const temp = temp1.concat(temp2);

  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    const curtemp = temp[i];
    if (typeof curtemp !== 'number') continue;
    if (curtemp > max) {
      max = curtemp;
    }
    if (curtemp < min) {
      min = curtemp;
    }
  }
  console.log(min, max);
  const amplitude = max - min;
  console.log(amplitude);
};
newCalcAmplitude(temperatures, temperaturestwo);
*/
// --------------------------------------------------------
/*
// *****************************
// DEBUGGING WITH CONSOLE AND BREAKPOINTS
// *****************************
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

// BUG VERSION to use the debugger
const bugCalcAmplitude = function (temp1, temp2) {
  const temp = temp1.concat(temp2);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temp.length; i++) {
    const curtemp = temp[i];

    if (typeof curtemp !== 'number') continue;
    if (curtemp > max) {
      max = curtemp;
    }
    if (curtemp < min) {
      min = curtemp;
    }
  }
  console.log(min, max);
  const amplitude = max - min;
  console.log(amplitude);
};
bugCalcAmplitude(temperatures, temperaturestwo);
*/
// --------------------------------------------------------

// *****************************
// DEBUGGING WITH CONSOLE AND BREAKPOINTS
// *****************************
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
// 1. 'for loop' that identifies the first value and the value number
// 2. logs it console
/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForcecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log(`... ` + str);
};
printForcecast(data1);
*/
// --------------------------------------------------------

// *****************************
// CODING WITH AI SECTION
// *****************************
// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/
/*
const data1 = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const workingWeekStats = function (data) {
  // setting all the variables:
  let totalHours = 0;
  let avDailyHours = 0;
  let mostHours = 0;
  let mostHoursDay = '';
  let numDaysWorked = 0;
  let fullWeek = '';

  // Defining the weekdays:
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  for (let i = 0; i < data.length; i++) {
    // Calculating the total hours worked in the week:
    totalHours += data[i];

    // Calculating the Average daily hours:
    avDailyHours += data[i] / data.length;

    // Calculating the day with the most worked hours:
    if (mostHours < data[i]) {
      mostHours = i;
      mostHoursDay = daysOfWeek[i];
    }

    // Number of days worked:
    numDaysWorked = data.length;

    //Whether the week was full-time or not:
    fullWeek = totalHours >= 35 ? 'yes' : 'no';
  }

  // Logging the result to console:
  console.log(`
    Total hours worked: ${totalHours.toFixed(2)}
    Average daily hours: ${avDailyHours.toFixed(2)}
    Day with most hours worked: ${mostHoursDay}
    Number of days worked: ${numDaysWorked}
    Was the week full time? ${fullWeek}`);
};
workingWeekStats(data1);
*/
