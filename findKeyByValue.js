
let pass = "Assertion Passed:";
let noPass = "Assertion Failed:";
// Here is my function for two variables (strings or bouleans)
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log("Assertion Passed: " + [actual] + " === " + [expected]);
    console.log(`${pass} ${actual} === ${expected}`);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object,value) {
  for (let key in object) {
        if(object[key] == value){
            return key;
        }
    }
 return false;
};


console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
