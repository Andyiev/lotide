const assertEqual = require("./assertEqual");
const eqArrays = function(arrOne,arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    console.log(` Arrays ${arrOne} and ${arrTwo} are not equal`);
    return false;
  } else {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      console.log(` Arrays ${arrOne} and ${arrTwo} are not equal`);
      return false;
    }
  }
  console.log(` Arrays ${arrOne} and ${arrTwo} are equal`);
  return true;
  }
};

module.exports = eqArrays;
