/*
for my future
console.log(Object.entries(countLetters("lighthouse in the house")));
console.log(Object.entries(forCheck));
// to use the assert checking have to convert objects into strings
part1 = JSON.stringify(countLetters("lighthouse in the house"));
part2 = JSON.stringify(forCheck);
assertEqual(part1,part2);

*/

/*
let pass = "Assertion Passed:";
let noPass = "Assertion Failed:";
// Here is my function for two variables (NOT ARRAYS!)
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log("Assertion Passed: " + [actual] + " === " + [expected]);
    console.log(`${pass} ${actual} === ${expected}`);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};
*/

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
/*
const eqObjects = function(obj1, obj2) {
  console.log("object1:", obj1);
  console.log("object2:", obj2);
  if (obj1 === obj2) {
    // console.log("Assertion Passed: " + [actual] + " === " + [expected]);
    console.log("Assertion Passed: " + obj1 + " === " + obj2);
  } else {
    console.log("Assertion Failed: " + obj1 + " !== " + obj2);
  }
};
*/
// does not work. it returns fault - Assertion Failed: [object Object] !== [object Object]

const eqObjects = function(object1,object2) {
  const entries1 = Object.entries(object1);
  const entries2 = Object.entries(object2);
  if (entries1.length !== entries2.length) {
    console.log("length: ", entries1.length, entries2.length);
    //console.log("🛑🛑🛑 Assertion Failed: " + object1 + " !== " + object2);
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
      //console.log("🛑🛑🛑 Assertion Failed: " + object1 + " !== " + object2);
      return false;
    }
  }
  //console.log("✅✅✅ Assertion Passed: " + object1 + " === " + object2);
  return true;
};


let ab = { a: "1", b: "2" };
let ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
/*
let abc = { a: "1", b: "2", c: "3" };
ab = { a: "1", b: "2" };
console.log(eqObjects(ab, abc)); // => false
/*
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
const cd = { c: "1", d: ["2", 3] };
console.log(eqObjects(cd, cd2)); // => false
*/