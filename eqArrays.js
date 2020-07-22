
let success = "✅✅✅Assertion passed";
let failure = "🛑🛑🛑Assertion failed";

const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log(`${success}`);
  } else {
    console.log(`${failure}`);
  }
};


const eqArrays = (actualArray,expectedArray) => {

 let actualOutput = "";
 let expectedOutput = "";

 for(let i = 0 ; i<actualArray.length ; i++) {

    actualOutput+=actualArray[i];

 }

 for(let j = 0 ; j<expectedArray.length ; j++){

    expectedOutput+= expectedArray[j];

 }

 if(actualOutput===expectedOutput) {
   return true;
 }
 return false;


};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);