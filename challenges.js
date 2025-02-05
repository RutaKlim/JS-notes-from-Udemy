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

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
console.log(
	`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
