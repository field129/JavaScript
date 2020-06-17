var firstName = "John";
var lastName = "Smith ";

var fullName = firstName + " " + lastName;
console.log(fullName);

var age = "28";
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
// displays undefined

job = "Teacher";
console.log(job);

var adress, telephone;
adress = "124 fake street";
telephone = "078987615";

console.log(adress + telephone);

//  you can put > one vartiable on a line, seperating with comma and define them later

// variable mutation
age = "nine hundred";
// this has converted from number to string

alert(fullName + "" + age + "is a massive bell");
// alert gives you pop up window

var lastName = prompt("what is his last name??");
console.log(firstName + lastName);
// prompt gets the user to type in an input to store to the variable lastName. overiding the earlier values
