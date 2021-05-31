// Here is my function for two variables (NOT ARRAYS!)
const assertEqual = function(actual, expected) {
  let pass = "Assertion Passed:";
  if (actual === expected) {
    // console.log("Assertion Passed: " + [actual] + " === " + [expected]);
    console.log(`${pass} ${actual} === ${expected}`);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};
// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual(2,30);
//assertEqual("Andrew","Andrew");

module.exports = assertEqual;