// function to check if the results are equal
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


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
    for (const item of allItems) {
      // inside the loop, 
      // increment the counter for each item:
      //   set a property with that string key to:
      //     the value that was already there (or zero if nothing there) with 1 added to it.
      // inside the loop:
      if (itemsToCount[item]) { 
          if (results[item]) {
            results[item] += 1;
          } else {
            results[item] = 1;
          }
      }

      //if (results[item]) {
      //  results[item] += 1;
      //} else {
      //  results[item] = 1;
      // }

      console.log(item);
    }
  return results;

}
// The function should report back how many instances of each string were found in the allItems array of strings.
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);