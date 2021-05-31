/*
The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
*/
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = function(oldArray) {
  let newArray = [];
  let newElmIndex = 0;
  //console.log("original array", oldArray);
  if (oldArray.length > 2) {
    if (oldArray.length % 2 === 1) {
      newElmIndex = Math.ceil(oldArray.length / 2 - 1);
      newArray.push(oldArray[newElmIndex]);
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

module.exports = middle;