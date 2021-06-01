const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [\"in\", \"the small\"] for [\" I live\", \"in\", \"the small room\"]", () => {
    assert.deepEqual(tail(["I live", "in", "the small room"]), ["in", "the small room"]);
  });
});
// This is my test code without mocha chai
/*
const tail = require("../tail");
const assertArraysEqual = require("../assertArraysEqual");
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(result, ["Lighthouse", "Labs"]);
*/