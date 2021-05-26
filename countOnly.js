// function to check if the results are equal
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
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
}
// The function should report back how many instances of each string were found in the allItems array of strings.