// Hoisting

// Functions
// Function Declaration

calculateAge(1965);

function calculateAge(year) {
  console.log(2020 - year);
}

// calculateAge(1989);

//in the creation phase of the execution context. which in this case is the global execution phase.
// the function decleration 'calculateAge' is stored in the variable object
//  the claculateAge function is already available to use without having to declare it.
// THIS ONLY WORKS FOR FUNCTION DECLERATIONS

// Function Expression

//retirement (1965);   calling function here before it is defined DOESN'T WORK
var retirement = function (year) {
  console.log(65 - (2020 - year));
};
retirement(1990); //calling function here works

// YOU CANNOT CALL the function retirement before declaring it because it is not a function declaration
// instead it is a function expression
// hoisting with functions only work with function delclerations

// VARIABLES
console.log(age); // this variable is available before it is declared it in the code. comes up as UNDEFINED, this is because JS knows there will be a age varibale it just hasn't been defined yet
var age = 23;
//console.log(age);

function foo() {
  var age = 65;
  console.log(age);
}
foo();
console.log(age);

// This code counter intuitively displays 65, then 23. Instead of the other way around.
// 23 is isnide the GLOBAL EXECUON CONTEXT (code that isn't inside any function)
// As sonn as the funtion is called foo () is called it gets put on top of the current context which is the THE GLOBAL EXECUTION CONTEXT
// This is assocated with the GLOBAL OBJECT, in the browser, this is the window object
//  lastName ===window.lastName
// true
// declaring a variable called lastName or window.lastName is the exact same thing
// ot's like lastName is a property of the widnow object
// PROPERTIES ARE JUST VARIABLES ATTACHED TO  OBJECTS

//  THE VARIABLE OBJECT

// the argument object is created, containing all the arguments that were passed into the function.
// Code is scanned for funtion declarations: for each funtion, a property is created in the Variable Object, pointing to the function. Meaning that all the functions are stored inside the varible objwect, even before the code starts executing
// Code is scanned for variable declarations: for each variable a property is created in the Variable Object, and set to undefined.
//

// functions and variables are hoisted, meaning that they are available before the execution
// howver variables are set up as undefined and only defined in execution phase
