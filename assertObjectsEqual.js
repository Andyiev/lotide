const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected) === true) {
    // console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    // console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};
// console.log("Assertion Passed: " + [actual] + " === " + [expected]);
   
const eqObjects = function(object1,object2) {
  let entries1 = Object.keys(object1);
  let entries2 = Object.keys(object2);
  console.log(entries1);
  console.log(entries2);
  if (entries1.length !== entries2.length) {
    console.log("lengths are not equal");
    console.log("🛑🛑🛑 Assertion Failed: " + object1 + " !== " + object2);
    return false;
  }
  for (let element in object1) {
    // Keys
    if (!object2.hasOwnProperty(element) || object1[element] !== object2[element]) {
      console.log("🛑🛑🛑 Assertion Failed: " + object1 + " !== " + object2);
      return false;
    }
  }
  console.log("✅✅✅ Assertion Passed: " + object1 + " === " + object2);
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true