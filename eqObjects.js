/*
I have to convert key into arrays and then check theirs values
*/

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



let ab = { a: "1", b: "2" };
let ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

let abc = { a: "1", b: "2", c: "3" };
ab = { a: "1", b: "2" };
console.log(eqObjects(ab, abc)); // => false

let cd = { c: "1", d: ["2", 3] };
let dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

let cd2 = { c: "1", d: ["2", 3, 4] };
cd = { c: "1", d: ["2", 3] };
console.log(eqObjects(cd, cd2)); // => false
