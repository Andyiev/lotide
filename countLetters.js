// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence. 
let part1 = [];
let part2 = [];
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log("Assertion Passed: " + [actual] + " === " + [expected]);
    console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};


// Step 1 - take a string (declare it)
// step 2 - go through the string
// step 3 - take the first symbol (letter) 
const countLetters = function(myString) {
//let myString = "lighthouse in the house";
  const result = {};
  for (let i = 0; i < myString.length; i++) {// for my string
    if (myString[i] !== " ") { //if this is not a space
      if (myString[i] in result) { // if I have this element of a string like a key in my result object
        result[myString[i]] = result[myString[i]] + 1; // I see l second time - i add 1 to the key-value for this key
      } else {
        result[myString[i]] = 1; //if i see myString[i] first time -  i put a new pair into the result
      }
    }
  } 
//console.log(result);
return result;
};

//this function returns an object where each unique character encountered in the string is a property of the object and the value for that property/key should be the number of occurrences for that character.

console.log(countLetters("lighthouse in the house"));// would return:

const forCheck = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};
console.log(Object.entries(countLetters("lighthouse in the house")));
console.log(Object.entries(forCheck));
part1 = JSON.stringify(countLetters("lighthouse in the house"));
part2 = JSON.stringify(forCheck);
assertEqual(part1,part2);