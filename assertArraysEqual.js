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

//assertArraysEqual([1,2,3],[2,3,4]);

/*const eqArrays = function(arrOne,arrTwo) {
  let note = [];
  if (arrOne.length !== arrTwo.length) {
    note = "The arrays are not equal";
    return note;
  } else {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        note = "The arrays are not equal";
        return note;
      }
    }
    note = "The arrays are equal";
    return note;
  }
};
*/
//console.log("[1,2,3] and [1,2,3]. " + eqArrays([1,2,3],[1,2,3]));
console.log("[1,2,3] and [1,2,3]. " + assertArraysEqual([1,2,3],[1,2,3]));
