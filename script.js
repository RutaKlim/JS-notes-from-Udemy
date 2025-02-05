/* 
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Ruta");
console.log(18);

let firstName = "Ruta";
let myAge = 18;
console.log(firstName);
console.log(myAge);

// This is a comment

let luffyIsCool = true;
console.log(luffyIsCool);

console.log(typeof true);
console.log(typeof luffyIsCool);
console.log(typeof 18);
console.log(typeof "Ruta");

luffyIsCool = "YES!";
console.log(luffyIsCool);

let year;
console.log(typeof year);
console.log(year);

year = 2025;
console.log(typeof year);
console.log(year);


let age = 17;
age = 18;

const birthYear = 2006;
*/
/*
const now = 2027;
const ageRuta = now - 2006;
const ageLuffy = now - 2009;
console.log(ageRuta, ageLuffy);

console.log(ageRuta * 2, ageRuta / 10, 2 ** 3);
// 2**3

const firstName = "Ruta";
const lastName = "Klimaviciute";
const fullName = firstName + " " + lastName;
console.log(fullName);

let x = 10 + 5; //15
x += 10; //25
x *= 4; //100
x++; //101
x--; //100
console.log(x);

console.log(ageRuta < ageLuffy);
console.log(ageLuffy >= 18);

const isFullAge = ageLuffy >= 18;

console.log(now - 2006 > now - 2009);
*/

/*
const now = 2027;
const ageRuta = now - 2006;
const ageLuffy = now - 2009;
console.log(now - 2006 > now - 2009);

let x, y;
x = y = 24 - 10 - 5;

const averageAge = (ageRuta + ageLuffy) / 2;
console.log(ageRuta, ageLuffy);
*/
/*
const firstName = "Ruta";
const job = "student";
const birthYear = 2006;
const year = 2025;

const ruta =
	"I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(ruta);

const rutaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(rutaNew);

console.log("string with \n new line");
console.log(`string with
   multiple lines`);
*/

/*
const age = 16;

if (age >= 18) {
	console.log("You can start your driving licence 🚗");
} else {
	const yearsLeft = 18 - age;
	console.log(
		`You can't get your driving license yet, wait another ${yearsLeft} years`
	);
}

const birthYear = 2006;
let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(century);
*/

/*
const inputYear = "2025";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
*/
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Ruta"));
console.log(Boolean({}));

const money = 0;
if (money) {
	console.log("Don't spend it all ");
} else {
	console.log("You should get a job!");
}
*/

//const age = 18;
//if (age === 18) console.log("YEP");

/*
const favourite = Number(prompt("What's your fav number?"));
console.log(favourite);
//console.log(typeof favourite);

if (favourite === 23) {
	console.log("nice number 7!");
} else if (favourite === 7) {
	console.log("7 is cool!");
} else {
	console;
}
*/
/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //b

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
//console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
// 	console.log("You can drive!");
// } else {
// 	console.log("You shouldn't drive...");
// }

const isTired = true; //C
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
	console.log("You can drive!");
} else {
	console.log("You shouldn't drive...");
}
*/
/*
const day = "monday";

switch (day) {
	case "monday": //day === monday
		console.log("Plan course structure");
		console.log("Go to coding meetup");
		break;
	case "tuesday":
		console.log("Prepare theory videos");
		break;
	case "wednesday":
	case "thursday":
		console.log("Write code examples");
		break;
	case "friday":
		console.log("Record video");
		break;
	case "saturday":
	case "sunday":
		console.log("Enjoy the weekend :D");
		break;
	default:
		console.log("Not a valid day!");
}

if (day === "monday") {
	console.log("Plan course structure");
	console.log("Go to coding meetup");
} else if (day === "tuesday") {
	console.log("Prepare theory videos");
} else if (day === "wednesday" || "thursday") {
	console.log("Write code examples");
} else if (day === "friday") {
	console.log("Record video");
} else if (day === "saturday" || "sunday") {
	onsole.log("Enjoy the weekend :D");
} else {
	console.log("Not a valid day!");
}
*/
/*
const age = 23;
age >= 18;
// ? console.log("I like to drink wine 🍷")
// : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine" : "water";

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

console.log(`I am ${age >= 18 ? "an adult" : "not an adult"}`);
*/
