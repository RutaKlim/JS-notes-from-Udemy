"use strict";
//This file is for extra practice from outside the given assignments as I wanted to try out some ideas that are just a bit harder than the given examples

/*
// 01
function petNum(cat, dog) {
	const pet = `I have ${cat} cat${cat === 1 ? `` : `s`}, and ${dog} dog${
		dog === 1 ? `` : `s`
	}.`;
	return pet;
}

const ruta = petNum(1, 1);
console.log(ruta);
*/
// ---------------------------------------

/*
// I wanted to practice 'Functions calling other functions':
function sweetSlices(slices) {
	return slices * 6;
}

function sweets(chocolate, gummy) {
	const chocolatePieces = sweetSlices(chocolate);
	const gummyPieces = sweetSlices(gummy);
	const sharedSweets = `You get ${chocolatePieces} chocolates, and ${gummyPieces} gummys!`;
	return sharedSweets;
}
console.log(sweets(3, 2));
/*
// ----
// mass = 1000g and 1kg
// volume = 1000ml and 1L
// This converts a drinks volume from ml to litres, and mass from g or kg, using a function within a function:
const calcVolumeL = (volume) => volume / 1000;
const calcMassKG = (mass) => mass / 1000;

function calcDrink(volume, mass) {
	const volumeL = calcVolumeL(volume);
	const massKG = calcMassKG(mass);
	console.log(
		`Your drinks volume is (${volume}ml or ${volumeL}L), and its mass is (${mass}g or ${massKG}KG). `
	);
}
calcDrink(1200, 50);
*/
/*
// -----------------------------------
// I came across this question in my maths paper and so I wanted to try program it as it reminded me of the for loop i did not long ago :)
// P(n) = (n, k=0 : k^3 ) - (n-1, k=0 : k^3) where n is a positive integer
// This was a question in the sigma notation format but i couldn't code that <,:D But basically n is the position of the last term, so the amount of terms in a way, and that is the input as well. The k=0 is the position of the first term, so this series will start with k=0, then k=1, k=2, k=3. Then the k^3 is the nth term rule.
// Q) Find P(3) and P(10)
const seriesSolution = function (n) {
	let sumAdd = 0;
	let sumSub = 0;
	for (let i = 0; i <= n; i++) {
		sumAdd += i ** 3;
	}
	for (let i = 0; i < n; i++) {
		sumSub += i ** 3;
	}
	return sumAdd - sumSub;
};
console.log(seriesSolution(3));
console.log(seriesSolution(10));
// it was quite actually really simple, but I was wondering if I could have added another function in the loop so I would have had to repeat that code. But this code is only for that specific question tho.
*/
