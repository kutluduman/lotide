 const assertArraysEqual = (arr1, arr2) => {

  if(eqArrays(arr1, arr2) === false) {

     console.log('🛑Failed : Arrays are not equal');

  } 

    console.log('✅ Success : Arrays are equal');
  

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


const words = ["ground", "control", "to", "major", "tom"];


const map = (array,callback) => {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}

const results = map(words, word => word[0]);

console.log(results);


assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])


