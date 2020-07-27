const mocha = require('chai').assert;
const head = require('../head');

describe('head', () => {

  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
    
    assert.strictEqual(head([]), undefined);
  });

  it('returns hello for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it('returns undefined for [head([]]', () => {
    assert.strictEqual(head([]), undefined);
  });

}); 