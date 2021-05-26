const eqArrays = function(arrOne,arrTwo) {
  let note = [];
  if (arrOne.length !== arrTwo.length) {
    note = "The arrays are not equal";
    return note;
  } else {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        note = "The arrays are not equal";
        return note;
      }
    }
    note = "The arrays are equal";
    return note;
  }
};
console.log("[1,2,3] and [1,2,3]. " + eqArrays([1,2,3],[1,2,3]));