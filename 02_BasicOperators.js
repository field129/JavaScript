// operators are like functions that are written in a special way

var currentyear, yearJohn, yearMark;
currentYear = 2020;
ageJohn = 28;
ageMark = 33;

// maths operator * / + -
yearJohn = currentYear - 28;
yearMark = currentYear - 33;

console.log(yearJohn);

console.log(currentYear + 2);

// logical operators
var johnOlder = ageJohn > ageMark;
var johnOlder = ageJohn < ageMark;

console.log(johnOlder);

// typeof operator describes whether boolean, string, number
console.log(typeof johnOlder);
console.log(typeof ageJohn);

// OPEARTOR PRESEDNECE
var yearJohn = 1989;
var drinkingAge = 18;
var isDrinkingAge = currentYear - yearJohn >= drinkingAge;
console.log(isDrinkingAge);

// The operators have different orders of precedence
//  () group is highest
// memeber acces...
// computed  member Access ...[...]

// mutliple assignments
var x, y;
x = (3 + 5) * 4 - 6; //8*4 32 - 6 = 26
console.log(x, y);

// challenge
// BMI= MASS (kg) / (height*height) (m)
// 1. store mark and john's mass and height
// 2. calculate both BMI
// 3. create boolean variables cpmntaining info about whether Mark has a higher BMI than John
// 4. Print string to the console vontaining variable from stage 3

var weightMarkKg,
  weightJohnKg,
  heightMarkMeters,
  heightJohnMeters,
  bmiJohn,
  bmiMark;
var isJohnHigherBmi = bmiJohn > bmiMark;
var isMarkHigherBmi = bmiMark > bmiJohn;

weightMarkKg = 88;
heightMarkMeters = 1.8;
bmiMark = weightMarkKg / (heightMarkMeters * 2);

weightJohnKg = 110;
heightJohnMeters = 1.5;
bmiJohn = weightJohnKg / (heightJohnMeters * 2);

console.log("Mark has a BMI of" + bmiMark);
console.log("John has a BMI OF" + bmiJohn);
console.log(isMarkHigherBmi);
console.log("Is Mark's BMI higher than John's?" + isMarkHigherBmi);
