# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @andyiev/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
  head: it returns the first element of an array
  tail: it returns an array without first element
  middle: it return one (odd number of elements in an array) or two (even array) 
  assertArraysEqual: assert eqArrays checking
  assertEqual:checking two symbols to be equal
  eqArrays: checking of two arrays to be equal