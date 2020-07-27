const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log("✅✅✅Assertion passed");
  } else {
    console.log("🛑🛑🛑Assertion failed");
  }
};

module.exports = assertEqual;