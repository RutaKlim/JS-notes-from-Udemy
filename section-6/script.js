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
