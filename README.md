# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kutluduman/lotide`

**Require it:**

`const _ = require('@kutluduman/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Returns pass or fail by comparing actual and expected arrays.
* `assertEqual`: Prints pass or fail by comparing actual and expected values.
* `assertObjectsEqual`: Returns pass or fail by comparing actual and expected objects.
* `countLetters`: Counts the numbers of characters occured in a string.
* `countOnly`: Counts the number of times a string occurs in an array
* `eqArrays`: Prints arrays are equal or not by comparing two arrays.
* `eqObjects`: Returns true or false by comparing two objects.
* `findKey`: Accepts two arguments - an object and a callback.Returns the first key for which the callback equals a truthy value after iterating through the object.
* `findKeyByValue`: Accepts two arguments - an object and a value. Returns the first key with the given value after iterating through the object.
* `flatten`: Returns a new array by merging two arrays that are nested.
* `head`: Returns the first element of an array.
* `letterPositions`: Returns the index where the letter occurs in an array as a string.
* `map`: Returns the first letter of each element in an array.
* `middle`: Returns the middle value or values of an array.
* `tail`: Returns an array after removing the first element.
* `takeUntil`: Accepts two arguments - an array and callback function. Returns a new array of items occuring until the end point that is specified by the callback function.
* `without`: Accepts two arguments - an array and items to remove. Returns a new array that excludes the items that are removed.
