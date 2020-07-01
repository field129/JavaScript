// Scoping

// scoping answers the question where can we access a ceertain variable?

// each new function creates a scope:
// the space/environment, in which the variables it defines are accessible.

// Lexical scoping: a function that is lexically (written) within another function gets access to the scope of the outer function.

////////////////////////////////////////////////////////////////////////////////////////////////
var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    console.log(a + b + c);
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// the global scope is within the ///// box and is accesible from everywhere from all functions. this is the default scope. we have access to var a and the first function.
// lines 15- 21 is the local scope, which has access to variable b and the second function. local not global. but thanks to lexial scoping it has access to its parent scope and all the variables and functions that it defines.
// lines 19-20 is scope of the second function, but despite the fact variables arent defined in this scope due to lexical it is able to print a + b + c
// the Scope Chain works from the bottom up
//  only if javascript engine doesnt find the variable anywhere will it spit out an error
// NB it doesnt work backwards meaning that the global scope will never have access to variables b and c, unless we recieve vaules from the functions
