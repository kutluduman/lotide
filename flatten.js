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


 const assertArraysEqual = (value) => {

  if(value) {

      console.log("Arrays are equal"); 

  } else {

    console.log("Arrays are not equal");
  }

 };


 const flatten = (arr) => {

  let output = [];

  for(let i = 0 ; i<arr.length ; i++) {

      if(Array.isArray(arr[i]) !== true) {

        output.push(arr[i]);

      } else {

          output = output.concat(arr[i]);
      }

  }

  return output;

 };

 console.log(flatten([1, 2, [3, 4], 5, [6]]));
 assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);