/*
The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
*/



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


const middle = function(oldArray) {
  let newArray = [];
  let newElmIndex = 0;
  //console.log("original array", oldArray);
  if (oldArray.length > 2) {
    if (oldArray.length % 2 === 1) {
      newElmIndex = Math.ceil(oldArray.length / 2 - 1);
      newArray.push(oldArray[newElmIndex]);
      //newArray.push(oldArray[newElmIndex + 1])
      return newArray;
    } else {
      newElmIndex = Math.ceil(oldArray.length / 2 - 1);
      newArray.push(oldArray[newElmIndex]);
      newArray.push(oldArray[newElmIndex + 1]);
      return newArray;
    }
  } else {
    return newArray;
  }
};

console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
//console.log(middle([1, 2, 3])); // => [2]
//console.log(middle([1, 2, 3, 4])); // => [2, 3]
//console.log(middle([1, 2, 3, 4, 5])); // => [3, 4]
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])),[3, 4]);