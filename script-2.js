"use strict";
// SECTION 3: JAVASCRIPT FUNDAMENTALS
// -----
/* // ACTIVATING STRICT MODE
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");
*/
// -----
/*
// FUNCTIONS
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
// FUNCTION DECLARATION VS EXPRESSIONS:
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
// ARROW FUNCTIONS
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
// FUNCTIONS CALLING OTHER FUNCTIONS
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
// REVIEWING FUNCTIONS
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
