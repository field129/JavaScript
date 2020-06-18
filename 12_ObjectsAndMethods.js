//  OBJECTS AND METHODS

// adding a function to an object is called a method
// you define another key and put the value as a function expression.
// you have a function name: call function key word (paramter names) {code to be implemented}

var john = {
  firstName: "John",
  // firstName is now a key and John is a value
  lastName: "Smith",
  birthYear: 1989,
  job: "Nuclear physicist",
  isMarried: "false",
  // func name: key word (parameter){ code to be executed}
  calcAge: function (birthYear) {
    return 2020 - birthYear;
  },
};
//  you call it exactly the same way  var . function name (parameter)
console.log(john.calcAge(1989));
