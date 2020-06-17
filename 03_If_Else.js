//     IF / ELSE STATEMENTS
//
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

// TEST YOUR KNOWLEDGE

// John and MIke both play basketball in different teams.
// In the last 3 games, John's team scored 89, 120 & 103 points
//                      Mike's team scored 116, 94 & 123 points

// 1. calculate the average score for each team
// 2. Decide which team has the highest average score
// 3. Then change the scores to show different winners, don't forget to take into account there might be a draw
// 4. Extra- Mary also plays bball, her team scored 97,134 &105

var johnScore1 = 100;
var johnScore2 = 100;
var johnScore3 = 100;
johnAverage = (johnScore1 + johnScore2 + johnScore3) / 3;
console.log("john's average score is" + " " + johnAverage);

var mikeScore1 = 100;
var mikeScore2 = 100;
var mikeScore3 = 101;
mikeAverage = (mikeScore1 + mikeScore2 + mikeScore3) / 3;
console.log("mike's average score is" + " " + mikeAverage);

maryScore1 = 100;
maryScore2 = 100;
maryScore3 = 102;
maryAverage = (maryScore1 + maryScore2 + maryScore3) / 3;
console.log("mary's average score is" + " " + maryAverage);

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
  console.log("John Wins with an average score of" + " " + johnAverage);
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
  console.log("Mike Wins with an average score of" + " " + mikeAverage);
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
  console.log("Mary Wins with an average score of" + " " + maryAverage);
} else {
  console.log("Draw");
}
// you alwyas have to call the
