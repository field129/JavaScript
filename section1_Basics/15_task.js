// John  goes out for 3 meals with a bills of:  1)$124, 2) $48, 3) $268, 180, 42
// He tips different percentages depending on how much the bill is
// 20% tip if bill is less than $50 ,(2)
// 15% tip if bill is less $50-$200, (1)
// 10% tip if the bill is more than $200 (3)

// TASK
// create a tip calculator using objects and loops
// create an object with an array for the bill values
// add method to claculate tip
// this method should include a loop to iterate over all the paid bills and do tip calcualtion.
//  as an output, create
// 1) a new array containinn all tips
// 2) new array containing final paid amounts (bill + tip)

//  then work out the tips for mark who has a different tipping method
// also create a function to work out the average of tips

var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      // determine perecentage based on tiping rules
      var percentage;
      var bill = this.bills[i];

      if (bill[i] < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill <= 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      // add results to arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  },
};

var mark = {
  fullName: "Mark Miller",
  bills: [77, 475, 30, 45],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      // determine perecentage based on tiping rules
      var percentage;
      var bill = this.bills[i];

      if (bill[i] < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill <= 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      // add results to arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  },
};

// calcualting averages

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  // tips at current position
  return sum / tips.length;
}

// tips [2,4,6]
//  you start with the sum of 0, 2 + 0 = 2   (first iteration, 2 is then applied to sum varibale)
// then current sum is 2 + 4 = 6 (second iteration, 6 is then applied to sum variable)
//  current sum is 6, 6+6=12 (third iteration, 12 is then applied to )

// doing the calculations
john.calcTips();
mark.calcTips();
console.log(john, mark);

john.average = calcAverage(john.tips); // john.tips is the array in which the tips are stored
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(
    john.fullName +
      "'s family pays higher tips with an average of $" +
      john.average
  );
} else if (mark.average > john.average) {
  console.log(
    mark.fullName +
      "'s family pays higher tips with an average of $" +
      mark.average
  );
}
