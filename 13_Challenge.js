// Reffering back to the first challenge where John and Mark compared their BMI
// Now implement with OBJECTS and METHODS/
// 1. For eahc of them , create an object with properties for their full name, mass and height.
// 2. Then, add a method to each object to calculate their BMI. Save the BMI to the object and also return it from the method.
// 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI.

var john = {
  fullName: "John Smith",
  mass: 100,
  height: 1.8,
  // func name: key word (parameter){ code to be executed}
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
john.calcBMI();

var mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.6,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
mark.calcBMI();

console.log(john, mark);

if (john.calcBMI > mark.calcBMI) {
  console.log(john.fullName + john.calcBMI);
} else if (mark.calcBMI > john.calcBMI) {
  console.log(mark.fullName + mark.calcBMI);
} else {
  console.log(
    mark.fullName +
      " " +
      "and" +
      " " +
      john.fullName +
      " " +
      "both have the same BMI of" +
      " " +
      john.calcBMI
  );
}

// // you can also set the age using this .
// var joe = {
//     birthYear: 1919,
//     calcAge: function (birthYear) {
//         this.age= 2020 - this.birthYear;
//       },
//     };
// joe.calcAge();
// // then all you have to do is call the function* joe.calcAge();
// console.log(joe)
