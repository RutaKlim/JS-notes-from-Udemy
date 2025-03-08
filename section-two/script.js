// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;
const calcAge = (birthYear) => 2024 - birthYear;
console.log(calcAge(2006));
*/
// -------------------------------------------------------------
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
// -------------------------------------------------------------
