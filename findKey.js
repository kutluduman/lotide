const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log("✅✅✅Assertion passed");
  } else {
    console.log("🛑🛑🛑Assertion failed");
  }
};

const findKey = (object,value) => {
  for (let eachKey in object) {
    if (value(object[eachKey])) {
      return eachKey;
    }
  }

};

const objects = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(objects,x => x.stars === 2),"noma");
