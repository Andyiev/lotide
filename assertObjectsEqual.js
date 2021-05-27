const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
    // console.log("Assertion Passed: " + [actual] + " === " + [expected]);
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
};
const eqObjects = function(object1,object2) {
  const entries1 = Object.entries(object1);
  const entries2 = Object.entries(object2);
  if (entries1.length !== entries2.length) {
    console.log("🛑🛑🛑 Assertion Failed: " + object1 + " !== " + object2);
    return false;
  }
  for (let i = 0; i < entries1.length; ++i) {
    // Keys
    if (entries1[i][0] !== entries2[i][0]) {
      console.log("🛑🛑🛑 Assertion Failed: " + object1 + " !== " + object2);
      return false;
    }
    // Values
    if (entries1[i][1] !== entries2[i][1]) {
      console.log("🛑🛑🛑 Assertion Failed: " + object1 + " !== " + object2);
      return false;
    }
  }
  console.log("✅✅✅ Assertion Passed: " + object1 + " === " + object2);
  return true;
};


// does not work. it returns fault - Assertion Failed: [object Object] !== [object Object]
// FUNCTION IMPLEMENTATION
/*
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
};
console.log(`Example label: ${inspect(actual)}`);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
const ab = { a: "1", b: "2" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
const cd = { c: "1", d: ["2", 3] };
console.log(assertObjectsEqual(cd, cd2)); // => false

//✅✅✅ Assertion Passed: [object Object] === [object Object]
//🛑🛑🛑 Assertion Failed: [object Object] !== [object Object]
