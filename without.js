/*
Implement without which will return a subset of a given array, removing unwanted elements.

This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
*/
// Step 1 - take a source array
// Step 2 - take an array of item for remove
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

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual,expected)) {
    console.log(`Assertion failed ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion passed ${actual} === ${expected}`);
  }
  // some "return ..." should be added here to get the result. Maybe...
};

const without = function(arrOne,arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    for (let j = 0; j < arrTwo.length; j++) {
      if (arrOne[i] === arrTwo[j]) {
        arrOne.splice(i,1);
      //console.log(arrOne);
      }
    }
  }
  return arrOne;
};
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // => ["hello", "world"]
assertArraysEqual(words, ["hello", "world", "lighthouse"]);