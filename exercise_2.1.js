// Exercise 1 Looping a Triangle


// var count = i;
// for (var i = 0; i < 7; i++) {
//   console.log(count += '#');
// }

var count = "";
for (var i = 0; i <= 6; i++) {
  console.log(count += "#");
}

var i = "#";
while (i.length < 8) {
  consolelog(i);
  i += "#";
}

for (var i = 0; i <= 8; ++i) {
  var string = "########";
  console.log(string.slice(0,i));
}

var string = "#######",
  result = "";
  for(var i = 0; i <= 8; ++i) {
    result += string.slice(0, i) + "\n"
    console.log(result.trim());



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

var i;
for (i=1; i<101; i++)
  if (i%3 === 0 && i%5 !== 0 ){
    console.log("Fizz");
  } else if (i%3 !== 0 && i%5 === 0) {
    console.log("Buzz"); {
      else if (i%3 === 0 && i%5 === 0){
        consolelog("fizzBuzz");
      } else {
        console.log(i);
      }
    };
  }
  var fizzBuzz = function() {
    for (var i = 1; i <= 100; i++) {
      var output = "";
      if (i % 3 ===0) output += "Fizz";
      if (i % 5 ===0) output += "Buzz";
      console.log(output || i);
    }
  };


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

// for a variable i that starts at 0 and goes to 8 by 1 unit create an empty string and assign it to a variable name number. For a variable x that starts at 0 and goes to 8 by 1 unit a loop. assign a variable total to x + i. If the total is divisible by 2 with no remainder, put a # sign else put a space. 

var size = 8;
for (var n = 0; n < size; n++) {
  var line = "";
  for (var k = 0; k < size; k++) {

  }
}
