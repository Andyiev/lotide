const eqArrays = require("./eqArrays");
const assertArraysEqual = function(actual, expected) {
  let pass = "Assertion Passed:";
  if (!eqArrays(actual,expected)) {
    console.log(`Assertion failed ${actual} !== ${expected}`);
    return false;
    } else {
    console.log(`${pass} ${actual} === ${expected}`);
    return true;
  }
};
//console.log(assertArraysEqual([1,2,3],[1,2,3]));
module.exports = assertArraysEqual;