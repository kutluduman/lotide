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
 
const assertArraysEqual = (arr1, arr2) => {

  if(eqArrays(arr1, arr2) === false) {

     console.log('🛑Failed : Arrays are not equal');

  } 

    console.log('✅ Success : Arrays are equal');
  

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