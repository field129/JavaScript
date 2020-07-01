// The Ternary Opearator or conditional operator and Switch Statements

var firstName = "John";
var age = 16;

age >= 18
  ? console.log(firstName + " " + "drinks beer.")
  : console.log(firstName + " " + "drinks juice");
// the same as if else if age is 18 or over then dtinks beer
//  : is the else, else they drink juice

// Ternary made of three parts:
// 1. The condition:     age >= 18
// 2. The if block:     ? console.log(firstName + "drinks beer.")
// 3. The else block:   : console.log (firstName + "drinks juice");

var drink = age >= 18 ? "beer" : "juice";
//         This side of the code gets figured out first
console.log(drink);

// alternative
if (age >= 18) {
  var drink = "beer";
} else {
  var drink = "juice";
}

// Switch Statment
var job = "unemployed";
switch (job) {
  case "teacher":
  case "instructor":
    //  if you want >1 case to have the same result
    console.log(firstName + "teaches kids to code");
    break;
  case "shotter":
    console.log(firstName + "grafts for a living");
    break;
  case "policeman":
    console.log(firstName + "beats up minorities");
    break;
  default:
    console.log(firstName + "aint got no job, he ain't got shit to do");
}

// you are comparing job to every case
//  you have to put break in to stop the code carrying on evaluating the other cases
//  you don't have to break on the last case.

// switch case instead of if else
age = 30;
switch (true) {
  case age < 13:
    console.log(firstName + " " + "is a boy");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " " + "is a teenager");
    break;
  case age >= 20 && age <= 30:
    console.log(firstName + " " + "is a young man");
    break;
  default:
    console.log(firstName + " " + "is a MAAAAAAAAn");
}

// var firstName = "John";
// var age = 28;

// if (age < 13) {
//   console.log(firstName + " " + "is a boy");

// } else if (age > 12 && age < 20) {
//   console.log(firstName + " " + "is a Teenager");

// } else if (age >= 20 && age < 30) {
//   console.log(firstName + " " + "is a Young Man");
// } else {
//   console.log(firstName + "is a MAN");
// }

// echo "# JavaScript" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git remote add origin https://github.com/field129/JavaScript.git
// git push -u origin master
