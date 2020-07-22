
let success = "✅✅✅Assertion passed";
let failure = "🛑🛑🛑Assertion failed";

const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log(`${success}`);
  } else {
    console.log(`${failure}`);
  }
};


const countLetters = (str) => {
let newStr = str.split(' ').join('');
let count = {};
for(let character of newStr){
  if(count[character]) {
    count[character]+=1
  } else {
    count[character]=1;
  }
}

return count;

};


assertEqual(countLetters("lighthouse is the best").l, 1);
assertEqual(countLetters("tim cook").o, 2);
