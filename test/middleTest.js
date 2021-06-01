const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(middle(["5"]), ['5']); 
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
// This is my test code without mocha and chai
/*
const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])),[3, 4]);
*/