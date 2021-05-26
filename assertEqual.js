// FUNCTION IMPLEMENTATION
let pass = "Assertion Passed:";
let noPass = "Assertion Failed:";
// Here is my function for two variables (NOT ARRAYS!)
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log("Assertion Passed: " + [actual] + " === " + [expected]);
    console.log(`${pass} ${actual} === ${expected}`);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2,30);
assertEqual("Andrew","Andrew");
