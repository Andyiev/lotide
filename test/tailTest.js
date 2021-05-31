const tail = require("../tail");
const assertArraysEqual = require("../assertArraysEqual");
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(result, ["Lighthouse", "Labs"]);