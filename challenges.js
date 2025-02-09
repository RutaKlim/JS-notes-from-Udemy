"use strict";
//***********************//
//****** SECTION 1 ******//
//***********************//

/*
//CHALLENGE 1
// BMI = mass / (height * height);
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
console.log(BMIMark, BMIJohn);

let BMIDif;
if (BMIMark > BMIJohn) {
	let BMIDif = BMIMark - BMIJohn;
	console.log(
		`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}), by ${BMIDif}!`
	);
} else {
	let BMIDif = BMIJohn - BMIMark;
	console.log(
		`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}) by ${BMIDif}!`
	);
}
*/
/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
	console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
	console.log("Koalas win the trophy");
} else {
	console.log("Both win the trophy");
}
*/

/*
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
console.log(
	`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/

//***********************//
//****** SECTION 2 ******//
//***********************//

/*
// CHALLENGE #1
// I struggled on this one because of the wording of the question.
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

//Test 1:
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
//Test 2:
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins2, scoreKoalas2);

function checkWinner(avgDolphins, avgKoalas) {
	if (avgDolphins >= 2 * avgKoalas) {
		console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
	} else if (avgKoalas >= 2 * avgDolphins) {
		console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
	} else {
		console.log(`No team wins...`);
	}
}
*/

/*
// CHALLENGE #2
const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
};

const bills = [125, 555, 44];
const tips = [
	calcTip(bills[0]),
	calcTip(bills[1]),
	calcTip(bills[bills.length - 1]),
];
console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
*/
