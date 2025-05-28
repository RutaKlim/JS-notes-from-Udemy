'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

/*
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/

/*
// **************************************
// 01 DESTRUCTURING ARRAYS
// **************************************
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [d, e, f] = restaurant.starterMenu;
console.log(e, d, f);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// Destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recieve 2 return values from a function
const [starter, mainFood] = restaurant.order(2, 0);
console.log(starter, mainFood);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

/*
// **************************************
// 02 - DESTRUCTURING OBJECTS
// **************************************

const { nameRestaurant, openingHours, categories } = restaurant;
console.log(nameRestaurant, openingHours, categories);

const {
  nameRestaurant: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default variables
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 143;
let b = 127;
console.log(a, b);
const obj = { a: 18, b: 21, c: 3 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
// Another example of nested objects
const {
  openingHours: {
    thu: { open: thuOpen, close: thuClose },
  },
} = restaurant;
console.log(thuOpen, thuClose);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
*/

/*
// **************************************
// 02 - THE SPREAD OPERATOR
// **************************************
// Notes: 'const []' is used for destructuring arrays, then 'const {}' is used for objects
const arr = [1, 2, 7];
const [firstB, secondB, thirdB] = arr;
const badNewArray = [2, 1, firstB, secondB, thirdB];
console.log(badNewArray);
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'icecream'];
console.log(newMenu);
// takes all the elements from the array, and doesn't create variables

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// iterables are arrays, strings, maps sets, BUT NOT objects.
// Can also add the spread oeprator to strings
const str = 'Ruta';
const letters = [...str, '', '.K'];
console.log(letters);
// console.log(`the name is spelt ${[letters]}`);

/*
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { ...restaurant, founder: 'Tommy' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
*/
/*
// **************************************
// 03 - REST PATTERN AND PARAMETERS
// **************************************
// 01 DESTRUCTURING
// SPREAD, because on RIGHT side of
const arr = [1, 2, ...[3, 4]];
// REST, because on LEFT side of
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
  ];
  console.log(pizza, risotto, otherFood);
  
  // Objects
  const { sat, ...weekdays } = restaurant.openingHours;
  console.log(weekdays);
  
  // 02 FUNCTIONS
  const add = function (...numbs) {
    let addedUp = 0;
    for (let i = 0; i < numbs.length; i++) {
      addedUp += numbs[i];
      }
      console.log(addedUp);
      };
      
      add(2, 3);
      add(5, 3, 7, 2);
      const x = [23, 5, 7];
      add(...x);
      
      restaurant.orderPizza('cheese', 'sausage', 'onion', 'spinach', 'meat');
      */
/*
     // **************************************
// 04 - SHORT CIRCUITING (&& AND ||)
// **************************************
// The OR operator (||) an use any data type , return ANY data type, short-circuiting
console.log(3 || 'Ruta');
console.log('' || 'Ruta');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 21 || null);
// OR operator
restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);
const guest2 = restaurant.numGuests || 10;
console.log(guest2);
// AND operator
console.log(0 && 'Ruta');
console.log(3 && 'Ruta');
console.log('Labas' && 72 && null && 'Ruta');
// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('cheese', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('cheese', 'spinach');
*/
/*
// **************************************
// 05 - THE NULLISH COALESCING OPERATOR (??)
// **************************************
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
/*
// **************************************
// 06 - LOGICAL ASSIGNMENT OPERATORS
// **************************************
const rest1 = {
  nameRest: 'Capri',
  numGuests: 20,
};
const rest2 = {
  nameRest: 'La Piazza',
  owner: 'Giovanni Rossi',
};
// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
// To make the owner anonymous
rest1.owner &&= 'anonymous';
rest2.owner &&= 'anonymous';

console.log(rest1);
console.log(rest2);
*/

// **************************************
// 07 - LOOPING ARRAYS: THE FOR-OF LOOP
// **************************************
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, j] of menu.entries()) {
  console.log(`${i + 1}: ${j}`);
}
console.log([...menu.entries()]);
*/

// **************************************
// 08 - ENHANCED OBJECT LITERALS
// **************************************
/*
// **************************************
// 09 - OPTIONAL CHAINING (?.)
// **************************************
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.risoto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'ruta', lastName: 'Klimaviciute' }];
console.log(users[0]?.name ?? 'User array empty');
console.log(users[2]?.name ?? 'User array empty');
*/
/*
// **************************************
// 10 - LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES
// **************************************
// property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open ${properties.length} days: `;
for (const day of Object.keys(openingHours)) {
  openStr += `${day}${properties[properties.length - 1] !== day ? `,` : `.`} `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
  }
  */

/*
// **************************************
// 11 - SETS
// **************************************
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
  ]);
  console.log(new Set('Ruta'));
  console.log(orderSet.size);
  console.log(orderSet.has('Bread'));
  console.log(orderSet.has('Pizza'));
  orderSet.add('Garlic Bread');
  orderSet.add('Garlic Bread');
  console.log(orderSet);
  orderSet.delete('Risotto');
  console.log(orderSet);
  
  for (const order of orderSet) console.log(order);
  
  // Example
  const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
  const staffUnique = [...new Set(staff)];
  console.log(staff);
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
  );
  
  console.log(new Set('rutaklimaviciute').size);
  */
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  nameRestaurant: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //  es6 enhanced object literals:
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ time = '00:00', address, mainIndex = 0, starterIndex = 0 }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// **************************************
// 12 - NEW OPERATIONS TO MAKE SETS USEFUL
// **************************************
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// SET OPERATOR 1
const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log('Intersection:', commonFoods);
// console.log([...commonFoods]);

// SET OPERATOR 2
const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log('Union:', italianMexicanFusion);
const italianMexicanFusion2 = [...new Set([...italianFoods, ...mexicanFoods])];
// console.log(italianMexicanFusion2);

// SET OPERATOR 3
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
// console.log('Difference:', uniqueItalianFoods);
// console.log('Difference:', uniqueMexicanFoods);

// SET OPERATOR 4
const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
// console.log(uniqueItalianAndMexicanFoods);

// console.log(italianFoods.isDisjointFrom(mexicanFoods));

// **************************************
// 13 - MAPS: FUNDAMENTALS
// **************************************
const rest1 = new Map();
rest1.set('name', 'Classico Italiano');
rest1.set(1, 'Firenze, Italy');
// console.log(rest1.set(2, 'Lisbon, Portugal'));

rest1
  .set('catagories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// console.log(rest1.get('name'));
// console.log(rest1.get(false));

const time = 21;
// console.log(rest1.get(time > rest1.get('open') && time < rest1.get('close')));
// console.log(rest1.has('catagories'));
rest1.delete(2);
// console.log(rest1);
// console.log(rest1.size);

const arr = [1, 2];
rest1.set(arr, 'Test');
rest1.set(document.querySelector('h1', 'Heading'));

// console.log(rest1);
// console.log(rest1.size);

// console.log(rest1.get(arr));
