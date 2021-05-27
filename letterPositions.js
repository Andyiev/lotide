/*
We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
*/

const letterPositions = function(myString) {
  
  const result = {};
  let resultArr = [];
  for (let i = 0; i < myString.length; i++) {// for my string
    
    if (myString[i] !== " ") { //if this is not a space
      if (myString[i] in result) { 
        // if I have this element of a string like a key in my result object
        resultArr[i] = result[myString[i]];
        resultArr[i].push(i);
        result[myString[i]] = resultArr[i];
        //result[myString[i]] = result[myString[i]] + " " + i; // I see l second time - i add this "i" to the key-value for this key
      } else {
        resultArr[i] = [];
        resultArr[i].push(i);
        result[myString[i]] = resultArr[i]; 
        //if i see myString[i] first time -  i put a new pair into the result
      }
    }
  } 
//console.log(result);
return result;
};

let sentence = "lighthouse in the house";
console.log(letterPositions(sentence));
/*
What would the resulting object look like with the same example string that we used before ("lighthouse in the house")? 
the result should be
{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/
