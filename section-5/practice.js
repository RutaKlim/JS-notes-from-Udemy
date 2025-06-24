'use strict';

const pet = { cat: 'Tommy' };
const ruta = {
  myName: 'Ruta',
  age: 18,
  hobbies: ['reading', 'eating', 'watching series', 'music'],
  appearance: {
    hair: {
      thickness: 'thick',
      colour: 'brown',
    },
    eyes: {
      colour: 'brown',
    },
  },
  pet,
};

// Destructuring an array - making multiple variables:
const [first, , third] = ruta.hobbies;
// console.log(first, third);

const { food = [], hobbies: rutaHobbies = [] } = ruta;
// console.log(food, rutaHobbies);

// Nested Objects:
const {
  appearance: {
    hair: { colour: rutasHairColour },
    eyes: { colour: rutasEyeColour },
  },
} = ruta;
/*
console.log(
  `Ruta's hair colour is ${rutasHairColour} and her eyes are ${rutasEyeColour}.`
  );
  console.log(
    `${
      rutasHairColour === rutasEyeColour ? 'Both are brown' : 'Both are not brown.'
      }`
      );
      */

// console.log(Object.keys(ruta.appearance));
// console.log(Object.values(ruta.appearance));
// console.log(Object.entries(ruta.appearance));

const socks = {
  fluffy: ['red', 'green', 'yellow'],
  sport: {
    nike: 1,
    primark: 6,
    onepiece: 3,
  },
};
// console.log(Object.keys(socks));
// console.log(Object.entries(socks));
// console.log(Object.values(socks));
// console.log(socks['fluffy']);
// console.log(socks['sport'['nike']]);

const socksMap = new Map(Object.entries(socks));
// console.log(socksSportMap);
const socksSportMap = new Map(Object.entries(socks['sport']));
// console.log(socksMap.get('sport'));

const ahof = 'All-time Hall of Famer';
// console.log(ahof.indexOf('t'));
// console.log(ahof.indexOf('m'));
// console.log(ahof.lastIndexOf('m'));
// console.log(ahof.indexOf('Hall'));
// console.log(ahof.slice(9));
// console.log(ahof.slice(9, 13));

/*
// *****************************
// function to find the first letter of words, then into a string in caps.
// *****************************
const groupName = function (name) {
  let newName = '';
  newName += name[0];
  for (const [position, letter] of Object.entries(name)) {
    if (letter == ' ') {
      newName += name[Number(position) + 1];
    }
  }
  console.log(newName.toUpperCase());
};
groupName('All-time Hall of Famer');
groupName('Tommorow X Together');
groupName('Tong Vfang Xien Qi');
// *****************************
*/
