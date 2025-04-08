"use strict";

/*
// ****************************
// #1 SCOPING
// ****************************
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
*/
// ****************************
// #2 HOISTING AND TDZ
// ****************************
var me = "Ruta";
let job = "student";
const year = 2006;

console.log(me);
console.log(job);
console.log(year);

// Functions
console.log(addDecl(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
console.log(addExpr(2, 3));

const addArrow = (a, b) => a + b;
console.log(addArrow(2, 3));

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
var y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
