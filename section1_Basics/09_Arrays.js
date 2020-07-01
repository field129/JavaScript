// Arrays
// These are like collections of variables that can even have deifferrent data types
//  create an array using square brackets []
// although you can create them using =new Array ()
// ARRAYS START AT 0 THEREFORE THE SECOND ELEMENT IS ACTUALLY NUMBER 1

var names = ["John", "Mark", "Jane"];
// we now have an array called names, made up of three elements: John, Mark and Mary

var years = new Array(1990, 1969, 1948);

console.log(names[0]);
// this will show JOhn in console
console.log(names.length);
// shows numerically how many elements are in the names array

// REPLACING DATA IN ARRAY
names[1] = "Ben";
names[5] = "mary";
console.log(names);
// this replaces the original element in 1 position with the new entry Ben

// ADDING / CHANGING DATA TO ARRAY
names[5] = "mary";
console.log(names);
// shows ben,mark,jane,emptyx2, mary - due to starting at 0
names[names.lenght]="mary";
// puts mary at the end of the array

// DIFFERENT DATA TYPES
var john = ["John", "Smith", 1989, "teacher", false];

john.unshift('Mr.')
// .unshift adds to beginning of array

john.push('blue');
// .push adds element to end of array

john.pop()
// .pop removes the last element in thid case blue from array

john.shift()
// .shift removes the first element from the array

john.indexOf(1990);
// indexOf shows which position that element is in in the array
//  if the element inside the brackets doesn't exist in the array then you get a -1
// this is useful to see if an element is in an array as per the ternary operator below:


var isDesigner =john.indexOf('designer')===-1? "John is not a designer" : "John IS a designer"
// we ask if the position of designer element in array. IF it is equal to -1 then John is not a designer else john is a designer 
