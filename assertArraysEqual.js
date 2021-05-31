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
};

//console.log("[1,2,3] and [1,2,3]. " + eqArrays([1,2,3],[1,2,3]));
//console.log("[1,2,3] and [1,2,3]. " + assertArraysEqual([1,///2,3],[1,2,3]));

module.exports = assertArraysEqual;