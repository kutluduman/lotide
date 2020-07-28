const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const object1Key = Object.keys(object1);
  const object2Key = Object.keys(object2);
  if (object1Key.length !== object2Key.length) {
    return false;
  }
  for (const value of object1Key) {
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
      if (! eqArrays(object1[value],object2[value])) {
        return false;
      }
    } else {
      if (object1[value] !== object2[value]) {
        return false;
      }
    }
  }

  return true;
};


module.exports = eqObjects;


// TESTS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false