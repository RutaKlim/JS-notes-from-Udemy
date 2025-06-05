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
