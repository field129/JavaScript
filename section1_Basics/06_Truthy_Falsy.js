// Truthy Falsy values and equality operators

// falsy values is a value when considered false when evaluated in an if else condition
// FALSY VALUES: undefined, null, 0 ," ", NaN (Not a Number)

//  Truthy values are values considered true, when evaluated in an if else condition
//  TRUTHY VALUES: ALL VALUES THAT ARE NOT FALSY VALUES

var height;
height = 0;
//  0 is classed as falsy value and would be classed as undefined
if (height || height === 0) {
  // in order to overcome this incorrect falsy value you have to use ||(OR) height ===0
  console.log("variable is defined");
} else {
  console.log("variable has NOT been defined");
}

//  Flasy and truthy statements are a useful way to see whether  a variable has been defined

// EQUALITY OPERATORS
if (height == "23") {
  console.log("The ==operator does type coercion");
}
//  == does type coercion and converts string to number etc
//  === does not if one id string and other number it will return false
