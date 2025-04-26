'use strict';

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
