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
// -----

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
