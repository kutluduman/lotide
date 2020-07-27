const mocha = require('chai').assert;
const tail = require('../tail');
const { assert } = require('chai');


describe('tail', () => {

it('returns Lighthouse from the ["Hello", "Lighthouse", "Labs"]', () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  assert.strictEqual(result[0],"Lighthouse");

}); 

it('returns Labs from the ["Hello", "Lighthouse", "Labs"]', () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  assert.strictEqual(result[1],"Labs");

}); 

it('returns length of the array as 2', () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  assert.strictEqual(result.length,2);

});


});
