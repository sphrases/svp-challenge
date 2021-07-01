// single line comment
/*
Multi
line
Comment
 */

let var1 = "Hallo Welt"; // variable that can be reassigned
var1 = 123; // reassigning value to 'var1'

const exampleVarUndefined = undefined; // 'undefined' data type (datentyp) on constant variable (cannot be reassigned)
const exampleVarNull = null; // 'null' data type
const exampleVarNumber = 1234; // 'number' data type
const d = "i am a string"; // 'string' (text) data type

const humanNames = ["Stanco", "Lukas", "Aiko", "Tobi"]; // Example Array that contains names (of type 'string')
humanNames.push("Pali"); // Adding value to the end of the Array

const humans = []; // Create empty Array

function makeHumans(name) { // function that recevies a unknown value and stores it into the variable 'name'
  const newHuman = {
    name: name,
    age: Math.floor(Math.random() * 99), // create random age between 0 and 99
    // Math.random() => random Nr between 0 and 1 (cannot reach 1, so the highest is 0.9999999....)
    // Math.floor() => round to the next lowest full number (a number without 'nachkommastellen' is also called an integer)
    // Math.ceil()) => similar to floor, but rounds up
  };
  return newHuman; // return the newly created human
}

function randomNr() {
  return Math.floor(Math.random() * 5); // random nr between 0 and 4
}

for (let i = 0; i <= 20; i++) { // for loop that counts from 0 until the index (i) variable reaches 20. i++ increases the variable on each iteration by one.
  const arrayIndex = randomNr(); // get random nr to index the array
  const humanName = humanNames[arrayIndex]; // take random nr and actually index the array to get random name
  const saveHuman = makeHumans(humanName); // create human with that random name
  humans.push(saveHuman); // push the new human into the humans array
  // This could also work
  // humans.push(makeHumans(humanNames[randomNr()]));
}
console.log(humans);
