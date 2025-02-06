const country = "Lithuania";
const continent = "Europe";
const population = 2.9;
/*
console.log(country);
console.log(continent);
console.log(population);
*/
const isIsland = false;
/*
let language;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);
*/
const language = "lithuanian";

//const halfPopulation = population / 2;
//halfPopulation++;
//console.log(halfPopulation);

const finlandPopulation = 6;
//console.log(finlandPopulation < population);

const averagePopulation = 33;
//console.log(averagePopulation < population);

description =
	country +
	" is in " +
	continent +
	" and its " +
	population +
	" million people speak " +
	language +
	".";
//console.log(description);
/* console.log(
	`${country} is in ${continent} and its ${population} million people speak ${language}.`
); */
/*
let populationDif;
if (population > 33) {
	populationDif = population - 33;
	console.log(
		`${country}'s population is ${populationDif} million above average.`
	);
} else {
	populationDif = 33 - population;
	console.log(
		`${country}'s population is ${populationDif} million below average.`
	);
}
*/
/*
const numNeighbours = Number(
	prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
	console.log("Only 1 border!");
} else if (numNeighbours > 1) {
	console.log("More than 1 border");
} else {
	console.log("No borders");
}
*/
/*
//  #09
// LOGICAL OPERATOR - to find a country that speaks english, has less than 50 million people and is not an island:
// ----
if (language === "English" && population < 50 && !isIsland) {
	console.log(`You should live in ${country}`);
} else {
	console.log(`${country} does not meet your criteia :(`);
}
// ----
*/

/*
// #10
// THE SWITCH STATEMENT - to log to the console a short message about each language.
// ----
switch (language) {
	case "chinese":
	case "mandarin":
		console.log("MOSt number of native speakers!");
		break;
	case "spanish":
		console.log("2nd place in number of native speakers");
		break;
	case "english":
		console.log("3rd place");
		break;
	case "arabic":
		console.log("5th most spoken language");
		break;
	default:
		console.log("Great language too :D");
}
// ----
*/

/*
// #11
// THE CONDITIONAL (TERNARY) OPERATOR - to log to the console a statment saying if if the country's population is above or below the average 33 (mil)
// ----
console.log(
	`${country}'s population is ${population > 33 ? "above" : "below"} average.`
);
// ----
*/
