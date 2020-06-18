// objects

// in arrays the order matters however in objects it does not
//  there are 2 ways of creating an object
// 1. OBJECT LITERAL  syntax -you use curly braces {} to declare an object and then a key which is a unique name, a colon :, then the value
// 2. NEW OBJECT syntax - var object name = newObject (); then object name. object = "value"

// onject literal (with curly braces )
var john = {
  firstName: "John",
  // firstName is now a key and John is a value
  lastName: "Smith",
  birthYear: 1989,
  job: "Nuclear physicist",
  isMarried: "false",
};
// Manipulating the data
console.log(john.firstName);
console.log(john["lastName"]);
var x = "birthYear";
console.log(john[x]);

john.job = "none";
john["isMarried"] = true;
console.log(john);

// you can use the . to not just acces but change also
//  [] to say which value you want to change

var jane = new Object();
jane.firstName = "Jane";
jane.family = ["brother", "mother", "Dad"];
jane.lastName = "Helivorfith";
console.log(jane);

// The above is slightly different way of creating n
