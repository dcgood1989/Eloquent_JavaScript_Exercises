// Exercise 1 Looping a Triangle


// var count = i;
// for (var i = 0; i < 7; i++) {
//   console.log(count += '#');
// }

var count = "";
for (var i = 0; i <= 6; i++) {
  console.log(count += "#");
}
// Make an empty array for the count, then as i approaches 6 by 1 unit each loop print # for the amount of times iterated through represented by a #

// Exercise 2 Fizz Buzz

for (var i = 0; i <= 100; i++) {
  var total = i + 1;
  var outcome = ""

  if (total % 3  == 0) {
    outcome = "Fizz";
  }
  if (total % 5 == 0) {
    outcome = "Buzz";
  }
  if (total % 15 == 0) {
  	outcome = "FizzBuzz"
  }
  console.log(outcome);
}

// for a variable i that starts at 0 and goes to 100 in increments of 1 make a variable of the total number. Once you have that then you can iterate through the loop by dividing by 3 and 5 and 15 with no remainders and printing the appropriate Fizz Buzz.

// Exercise 3 Chess Board

for (var i = 0; i < 8; i++) {
  var  number = "";
  for (var x = 0; x < 8; x++) {
    var total = i + x;
  	if (total % 2 == 0) {
  	  number += "#";
    } else {
      number += " ";
    }
  }
  console.log(number);
}

// Set a variable amount to 8. A loop for a variable x as it counts to 8 by one is within another loop using i as it counts up to 8 by 1. The total is amount of the 2 variables added together. If they total is divisible by 2 with no remainder then it prints a # else it prints a space. Then print to the screen calling the empty string variable.
