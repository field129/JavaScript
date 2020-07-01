// Brian goes out for 3 meals with a bills of:  1)$124, 2) $48, 3) $268
// He tips different percentages depending on how much the bill is
// 20% tip if bill is less than $50 ,(2)
// 15% tip if bill is less $50-$200, (1)
// 10% tip if the bill is more than $200 (3)

// TASK
// create a tip calculator as a function
// create 2 arrays:
//  1 containing all 3 tips one for each bill
//  2 containing all 3 final amounts bills+tip

function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill <= 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];

var finalAmounts = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalAmounts);
