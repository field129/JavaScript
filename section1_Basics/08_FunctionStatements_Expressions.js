//  Function Statements and expressions

// Function Declaration
function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + "teaches kids to code";
    // using return means there is no need for break
    case "driver":
      return firstName + "works for Uber";
    case "designer":
      return firstName + "designs stuff";
    default:
      return firstName + "does something  else";
  }
};

console.log(whatDoYouDo("teacher", "Gregg"));
console.log(whatDoYouDo("driver", "Steve"));
console.log(whatDoYouDo("designer", "Anton"));
console.log(whatDoYouDo("retired", "Brian"));

// staements and expressions not just applicable for functions but globally in JS

// JS EXPRESSIONS are pieces of code that always priduce a value, it doesn't matter how long they are,
// as long as they result in a single value then they are an EXPRESSION, it could be number string whatever,

// WHENEVER JS EXPECTS A VALUE WE ALWAYS HAVE TO WRITE AN EXPRESSION

// JS STATEMENTS JUST PERFORM ACTIONS, NOT PRODUCING IMEDIATE RESULTS OR VALUES
// E.G.
