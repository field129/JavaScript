// *************
// Loops  & Iterattions 

// Loops are a way of automating repetitive tasks
//  you use the key word FOR

for (var i=0; i<=10; i++ ) {
    console.log (i);
}

//  i is a standard in js for a counter variable 
//  it has the inital value then a ;
// it has a condition that is evaluated in each iteration, before the next loop will run. Only if true the loop starts
// then you have the update 
// then you have the loop block {} what should happen, in this case log to console 


//  start with i=0, 0<=10 true, log i to conosle, then i++
// end i=10,,= 10<= 10 true, log 10 to console
// i =11, 11=<10 false, exit loop!

var john = ['John', 'Smith', 1990, 'designer', false];

console.log(john [0]);
console.log(john [1]);
console.log(john [3]);
console.log(john [4]);
//  this isn't very effective, what if there was 50 lines of code??!!!

// FOR LOOP
for (var i=0; i< john.length; i++) {
    console.log (john [i]);
}

//  here we let i take care of the loop instead of writing the position as before 
// you use.length to determine when the loop should end- we only run the loop as long as i is less than the length of array


// WHILE LOOP
while (i < john.length) {
    console.log(john[i]);
    i ++;
}
//  this is exactlky the same result as for loop


// CONTINUE 8 BREAK STATEMENTS 

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i=0; i< john.length; i++) {
    if (typeof john [i] !== "string")continue;
//                      !== is different
// if (the value of i in the array of john is different to the type of  string) then continue
        console.log (john [i]);
// so when the code gets to the 1990 value, which is different to a string then we enter the IF part where we continue  or skip.
}

for (var i=0; i< john.length; i++) {
    if (typeof john [i] !== "string")break;
    console.log(john[i]);
}
//  once it encounters something that is not a string, it breaks out of the loop! 


// LOOPING BACKWARDS

for (var i = john.length - 1; i >=0; i--) {
    
}