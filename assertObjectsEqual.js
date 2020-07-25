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


const eqArrays = (actualArray,expectedArray) => {

  if (actualArray.length !== expectedArray.length) {
    return false;
  }
 
  for (let i = 0; i < actualArray.length; i++) {
 
    for (let j = 0; j < expectedArray.length; j++) {

      if (actualArray[i] !== expectedArray[i]) {
        return false;
      }

    }
     
  }
  return true;
  
};




const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  if (eqObjects(actual,expected) === false) {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  }
};



// TESTS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false

