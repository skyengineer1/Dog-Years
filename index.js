// Age of me in human years
const myAge = 23;

// The first two years of a dog's life count as 10.5 dog years each.
let earlyYears = 2;
earlyYears *= 10.5;

// Each year following the first two counts as 4 dog years.
let laterYears = myAge - 2;
laterYears *= 4;

// Log early and later years for reference
console.log(earlyYears);
console.log(laterYears);

// Calculate total age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// Store my name in lowercase for consistency
const myName = "Goga";

// Log a descriptive message with the results
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
