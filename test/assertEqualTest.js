const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns true for \"Andrew\" and \"Andrew\"", () => {
    assert.deepEqual(assertEqual(("Andrew"),("Andrew")), true);
  });
  it("returns true for 1234 and 1234", () => {
    assert.deepEqual(assertEqual((1234),(1235)), false);
  });
});

// This is my old code without mocha chai
/*
const assertEqual = require('../assertEqual');
assertEqual(1, 1);
assertEqual(2,30);
assertEqual("Andrew","Andrew");
*/