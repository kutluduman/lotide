const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log("✅✅✅Assertion passed");
  } else {
    console.log("🛑🛑🛑Assertion failed");
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const object1Key = Object.keys(object1);
  const object2Key = Object.keys(object2);
  if(object1Key.length !== object2Key.length) {
    return false;
  } 
  for(const value of object1Key){
    if(Array.isArray(object1[value]) && Array.isArray(object2[value])) {
      if(! eqArrays(object1[value],object2[value])){
        return false;
      }
    } else {
      if(object1[value] !== object2[value]){
        return false
      }
    }
  }

  return true;
};





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