'use strict';

// **************************************
// 01 - DEFAULT PARAMETERS
// **************************************
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', undefined, 1234);

// **************************************
// 02 - HOW PASSING ARGUMENTS WORKS: VALUE vs REFERENCE
// **************************************
// passing by value and passing by reference
// js only does passing by value

const flight = 'LH127';
const ruta = {
  name: 'Ruta Klimaviciute',
  passport: 1234567890,
};

function checkIn(flightNum, passenger) {
  flightNum = 'LH333';
  passenger.name = 'Miss. ' + passenger.name;

  if (passenger.passport === 1234567890) {
    console.log('Checked in!');
  } else {
    console.log('Wrong passport!');
  }
}

// checkIn(flight, ruta);
// console.log(flight);
// console.log(ruta);

// Is the same as doing:
const flightNum = flight;
const passenger = ruta;

// **************************************
// 03 - FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
// **************************************

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name} function`);
};

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
// document.body.addEventListener('click', high5);

// **************************************
// 04 - FUNCTIONS RETURNING FUNCTIONS
// **************************************
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('hey'); // so now basically the the whole func is is greeterHey so that's the name given as well
// greeterHey('ruta');
// greet('hello')('rutaa');

// task: turn the greet func into an arrow func
const greetA = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greetA('heyy')('rutaata');
