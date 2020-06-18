// ****  Functions allow you to run a piece of code many times ******

// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)

// The code to be executed, by the function, is placed inside curly brackets: {}

function calculateAge(birthYear) {
  //        function name (parameter name ){function block / code to be executed}
  return 2020 - birthYear;
}

var ageTom = calculateAge(1989);
var ageDessa = calculateAge(1985);
var ageBob = calculateAge(1945);
console.log(ageTom, ageDessa, ageBob);
// we return this and save to a variable so we can use it, although you dont have to return

// function is like a machine that recieves input, does some stuff with it, then returns something else

// DRY PRINCIPLE -DON'T REPEAT YOURSELF

function yearsUntilRetirement(birthYear, firstName) {
  var age = calculateAge(birthYear); //you can call another function inside a function
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(
      firstName + " " + "retires in" + " " + retirement + " " + "years"
    );
  } else {
    console.log(firstName + " " + "is already retired");
  }
}
yearsUntilRetirement(1989, "Tom");
yearsUntilRetirement(1985, "Dessa");
