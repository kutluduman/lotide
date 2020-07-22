
let success = "✅✅✅Assertion passed";
let failure = "🛑🛑🛑Assertion failed";

const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log(`${success}`);
  } else {
    console.log(`${failure}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = (allItems, itemsToCount) => {

  let result = {};

  for(let item of allItems){
    if(itemsToCount[item]){
      if (result[item]) {
        result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
}

return result;

};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

console.log(result1)

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);