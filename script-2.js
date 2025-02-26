"use strict";
// SECTION 3: JAVASCRIPT FUNDAMENTALS

// *****************************
/* // ACTIVATING STRICT MODE
// *****************************
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");
*/

/*
// *****************************
// FUNCTIONS
// *****************************
function logger() {
	console.log("Mano vardas yra Ruta");
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0); //this captures the result
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// *****************************
// FUNCTION DECLARATION VS EXPRESSIONS:
// *****************************
//Function declaration
function calcAge1(birthYear) {
	return 2025 - birthYear;
}
const age1 = calcAge1(2006);
console.log(age1);

// Function experssion
const calcAge2 = function (birthYear) {
	return 2025 - birthYear;
};
const age2 = calcAge2(2006);
console.log(age1, age2);
*/

/*
// *****************************
// ARROW FUNCTIONS
// *****************************
// Arrow function:
const calcAge3 = (birthYear) => 2025 - birthYear;
const age3 = calcAge3(2006);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
	const age = 2025 - birthYear;
	const retirement = 65 - age;
	//return retirement;
	return `${firstName} retires in ${retirement} years.`;
};
console.log(yearUntilRetirement(2006, "Ruta"));
console.log(yearUntilRetirement(2000, "Li Xun"));
*/

/*
// *****************************
// FUNCTIONS CALLING OTHER FUNCTIONS
// *****************************
function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces} pieces if apple and ${orangePieces} pieces of orange.`;
	return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
// *****************************
// REVIEWING FUNCTIONS
// *****************************
const calcAge = function (birthYear) {
	return 2026 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
	const age = calcAge(birthYear);
	const retirement = 65 - age;
	//return retirement;
	if (retirement > 0) {
		console.log(`${firstName} will retire in ${retirement} years.`);
		return retirement;
	} else {
		console.log(`&{firstName} has already retired`);
		return -1;
	}
	
	// return retirement > 0
	// 	? `${firstName} will retire in ${retirement} years.`
	// 	: `You are already retired.`;
	// //This was my idea of how to account for the negative.
		

	//return `${firstName} will retire in ${retirement} years.`;
	// this above was what was at the star but it doesnt account for negative.
};

console.log(yearUntilRetirement(2006, "Ruta"));
console.log(yearUntilRetirement(1903, "Li Xun"));
*/

/*
// *****************************
// ARRAYS
// *****************************
const friend1 = "Tommy";
const friend2 = "Katai";
const friend3 = "Jessy";

const friends = ["Tommy", "Katai", "Jessy"];
console.log(friends);
const years1 = new Array(2006, 2000, 2024);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Luigi";
console.log(friends);

const firstName = "Ruta";
const ruta = [firstName, "Klimavaiciute", 2025 - 2006, "student", friends];
console.log(ruta);
console.log(ruta.length);

// Exercise
const calcAge = function (birthYear) {
	return 2026 - birthYear;
};

const years = [2000, 2004, 2006, 2020, 2025];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
	calcAge(years[0]),
	calcAge(years[1]),
	calcAge(years[years.length - 1]),
];
console.log(ages);
*/
/*
// *****************************
// BASIC ARRAY OPERATIONS
// *****************************
// adds elements:
const friends = ["Tommy", "Katai", "Jessy"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("Dom");
console.log(friends);

// remover elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Katai"));
console.log(friends.includes("Katai"));

if (friends.includes("Mark")) {
	console.log("You have a friend called Mark");
} else {
	console.log("You don't have a friend called Mark");
}
*/
/*
// *****************************
// OBJECTS
// *****************************
const ruta = {
	firstName: "Ruta",
	lastName: "Klimaviciute",
	age: 2025 - 2006,
	friends: ["Tommy", "Katai", "Jessy"],
};
*/
/*
// *****************************
// DOT vs BRACKET NOTATION
// *****************************
const ruta = {
	firstName: "Ruta",
	lastName: "Klimaviciute",
	age: 2025 - 2006,
	friends: ["Tommy", "Tiri", "Bob"],
};
console.log(ruta);

console.log(ruta.lastName);
console.log(ruta["lastName"]);

const nameKey = "Name";
console.log(ruta["first" + nameKey]);
console.log(ruta["last" + nameKey]);

// const interestedIn = prompt(
// 	"What do you want to know about Ruta? Choose between firstName, lastName, age, job and friends."
// );
// console.log(interestedIn);

// if (ruta[interestedIn]) {
// 	console.log(ruta[interestedIn]);
// } else {
// 	console.log("That is an undefined value.");
// }

ruta.location = "England";
ruta["cat"] = "Tommy";

// 'Ruta has 3 friends, and her best friend is Tommy'
const numFriends = ruta["friends".length];
console.log(
	`${ruta.firstName} has ${ruta.friends.length} friends, and her best friend is ${ruta.friends[0]}.`
);
*/

/*
// *****************************
// OBJECT METHODS
// *****************************
const ruta = {
	firstName: "Ruta",
	lastName: "Klimaviciute",
	birthYear: 2006,
	position: "student",
	friends: ["Tommy", "Tiri", "Bob"],
	hasDriversLicense: false,

	// calcAge: function (birthYear) {
	// 	return 2025 - birthYear;
	// },

	// calcAge: function () {
	// 	return 2025 - this.birthYear;
	// },
	calcAge: function () {
		this.age = 2025 - this.birthYear;
		return this.age;
	},

	getSummary: function () {
		return `${this.firstName} is a ${this.calcAge()}-year old ${
			this.position
		}, and she has ${this.hasDriversLicence ? "a" : "no"} driver's license.`;
	},
};

console.log(ruta.calcAge());
console.log(ruta.age);
console.log(ruta.age);
console.log(ruta.age);
// console.log(ruta.calcAge(2007));
// console.log(ruta["calcAge"](2008));

// Challenge: 'Ruta is a 19-year old student, and she has no driver's license
// console.log(
// 	`${ruta.firstName} is a ${ruta.age}-year old ${ruta.position}, and she has ${
// 		ruta.hasDriversLicence ? "a" : "no"
// 	} driver's license.`
// );
console.log(ruta.getSummary());
*/
/*
// *****************************
// ITERATION: THE FOR LOOP
// *****************************
// console.log("Lifting weights repetition 1");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
	console.log(`Lifting weights repetition ${rep}`);
}
	*/

/*
// *****************************
// LOOPING ARRAYS, BREAKING AND CONTINUING
// *****************************
const ruta = [
	"Ruta",
	"Klimaviciute",
	2025 - 2006,
	"student",
	["Tommy", "Rapolas", "Lougi"],
];
const types = [];

for (let i = 0; i < ruta.length; i++) {
	// Reading from ruta array:
	console.log(ruta[i], typeof ruta[i]);

	// Filling gtypes array:
	//types[i] = typeof ruta[i];
	types.push(typeof ruta[i]);
}

console.log(types);

const years = [2000, 2002, 2004, 2006];
const ages = [];
for (let i = 0; i < years.length; i++) {
	ages.push(2025 - years[i]);
}
console.log(ages);

// CONTINUE AND BREAK
console.log(" --- ONLY STRINGS ---");
for (let i = 0; i < ruta.length; i++) {
	if (typeof ruta[i] !== "string") continue;
	console.log(ruta[i], typeof ruta[i]);
}
console.log(" --- BREAK WITH NUMBER ---");
for (let i = 0; i < ruta.length; i++) {
	if (typeof ruta[i] === "number") break;
	console.log(ruta[i], typeof ruta[i]);
}
*/
