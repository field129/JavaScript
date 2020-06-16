//     IF / ELSE STATEMENTS

var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + "is married!");
} else {
  console.log(firstName + "is not married!");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + "is married");
} else {
  console.log(firstName + "is not married");
}

var weightMarkKg,
  weightJohnKg,
  heightMarkMeters,
  heightJohnMeters,
  bmiJohn,
  bmiMark;

// var isJohnHigherBmi = bmiJohn > bmiMark;
// var isMarkHigherBmi = bmiMark > bmiJohn;

weightMarkKg = 88;
heightMarkMeters = 1.8;
bmiMark = weightMarkKg / (heightMarkMeters * 2);

weightJohnKg = 110;
heightJohnMeters = 1.5;
bmiJohn = weightJohnKg / (heightJohnMeters * 2);

console.log("Mark has a BMI of" + " " + bmiMark);
console.log("John has a BMI of" + " " + bmiJohn);

if (bmiMark > bmiJohn) {
  console.log("Mark has the highest BMI");
} else {
  console.log("John has the highest BMI");
}
