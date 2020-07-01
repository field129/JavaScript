// Boolean Logic

var firstName = "John";
var age = 28;

if (age < 13) {
  console.log(firstName + " " + "is a boy");
} else if (age > 12 && age < 20) {
  console.log(firstName + " " + "is a Teenager");
} else if (age >= 20 && age < 30) {
  console.log(firstName + " " + "is a Young Man");
} else {
  console.log(firstName + "is a MAN");
}

// AND (&&) => true if ALL are true
// OR (||) => true if ONE is true
// NOT (!) => inverts true/false value
