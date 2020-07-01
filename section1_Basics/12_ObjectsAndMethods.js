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


//  *** THIS **** means this object, the present or current object
var james = {
birthYear: 1919,
calcAge: function (birthYear) {
    return 2020 - this.birthYear;
// by using this.birthyear we don't have to pass the paramater value when calling it it 
  },
};
console.log(james.calcAge());
// notice we do not have to put the actual year as we did  for John

// storing
james.age = james.calcAge()

// you can also set the age using this . 
var joe = {
    birthYear: 1919,
    calcAge: function (birthYear) {
        this.age= 2020 - this.birthYear;
      },
    };
joe.calcAge();
// then all you have to do is call the function* joe.calcAge();
console.log(joe)

// weve gone from having to pass in birth eyear as argument to the function with John
//  to being able to read the birth year directly from the james onject using THIS
//  then instead of returning the age result we actually stored it into the object with Joe