const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log("✅✅✅Assertion passed");
  } else {
    console.log("🛑🛑🛑Assertion failed");
  }
};

assertEqual('Lighthouse Labs','Bootcamp');
assertEqual(1,1);



