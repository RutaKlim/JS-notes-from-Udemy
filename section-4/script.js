"use strict";

function calcAge(birthYear) {
  const age = 2025 - birthYear;
  function printAge() {
    const output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millienial = true;
      const str = `Oh, you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millienial);
    // add(2, 3);
  }
  printAge();
  return age;
}

const firstName = "Ruta";
calcAge(2006);
