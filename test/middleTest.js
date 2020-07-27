const mocha = require('chai').assert;
const middle = require('../middle');
const { assert } = require('chai');

describe('middle', () => {

it('returns the middle as 2 and 3 for the array [1,2,3,4]', () => {
  assert.deepEqual(middle([1,2,3,4]),[2,3]);
});

it('returns the middle as 3 and 4 for the array [1, 2, 3, 4, 5, 6]',() => {
  assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
});

it('returns the middle as 3 for the array 1, 2, 3, 4, 5]', () => {
  assert.deepEqual(middle([1,2,3,4,5]),[3]);
});


});