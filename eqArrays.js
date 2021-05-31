// this function is to compare two values, not for arrays
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log("Assertion Passed: " + [actual] + " === " + [expected]);
    console.log("Assertion passed: " + actual + " === " + expected);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};
const eqArrays = function(arrOne,arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  } else {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
  }
};

module.exports = eqArrays;
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // checking work
/*
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
*/