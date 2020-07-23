const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log("✅✅✅Assertion passed");
  } else {
    console.log("🛑🛑🛑Assertion failed");
  }
};


const eqArrays = (actualArray,expectedArray) => {

  if(actualArray.length !== expectedArray.length) {
    return false;
  }
 
  for (let i = 0; i < actualArray.length; i++) {
 
 for(let j = 0 ; j < expectedArray.length ; j++) {

  if (actualArray[i] !== expectedArray[i]) {
    return false;
      }

    }
     
  }
 return true;
  
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);