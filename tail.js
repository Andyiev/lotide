let tail = function(array) {
  array.shift();
  console.log(array);
  return array;
};
const assertEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    return "False";
  } else {
  // comapring each element of array
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] === expected[i]) {
        console.log("Assertion Passed: " + [actual] + " === " + [expected]);
      } else {
        console.log("Assertion Failed: " + [actual] + " !== " + [expected]);
      }
    }
  }
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
// => will always fail!
