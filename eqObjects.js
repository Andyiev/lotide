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



const eqObjects = function(arrOne,arrTwo) {
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
/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
*/
const abc = { a: "1", b: "2", c: "3" };
const ab = { a: "1", b: "2" };
console.log(eqObjects(ab, abc)); // => false
/*
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
const cd = { c: "1", d: ["2", 3] };
console.log(eqObjects(cd, cd2)); // => false
*/