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
/*
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
*/
/*
// ****************************
// #3 'THIS' KEYWORD
// ****************************
// console.log(this);
const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  // console.log(this);
};
calcAge(2006);
//
const calcAgeArrow = (birthYear) => {
  console.log(2025 - birthYear);
  // console.log(this);
};
calcAgeArrow(2006);
//
const ruta = {
  year: 2006,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
};
ruta.calcAge();
//
const tommy = {
  year: 2015,
};
tommy.calcAge = ruta.calcAge;
tommy.calcAge();

const f = ruta.calcAge;
//
const pencil = {
  books: 27,
  pencils: 6,
  totPencils: function () {
    return this.pencils * 3;
  },
  totBooks: function () {
    return this.books * 2;
  },
};
console.log(pencil.totBooks());
console.log(pencil.totPencils());
*/

// ****************************
// #4 REGULAR FUNCTIONS VS ARROW FUNCTIONS
// ****************************
const ruta = {
  firstName: "Ruta",
  year: 2006,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const IsMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // Solution 2
    const IsMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    IsMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`), // doesn't work
  bye: function () {
    console.log(`Bye ${this.firstName}!!`);
  }, // works
};
ruta.greet(); // doesn't work
ruta.bye(); // works, so just use a normal function
ruta.calcAge();

const addExpr = function (a, b) {
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => a + b;
