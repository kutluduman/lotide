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


 const middle = (arr) => {

  let arrMiddle = [];

  let indexMiddle = Math.floor(arr.length/2);

  if(arr.length <= 2) {
     return arrMiddle;
  } else if(arr.length % 2 === 0) {
    arrMiddle.push(arr[(indexMiddle) - 1]);
    arrMiddle.push(arr[indexMiddle]);
  } else {
    arrMiddle.push(indexMiddle);
  }

  return arrMiddle;

 };

 console.log(middle([1, 2, 3, 4]));
 console.log(middle([1, 2, 3, 4, 5, 6]));

 assertArraysEqual(middle([1,2,3,4]),2,3);
 assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), 3,4);