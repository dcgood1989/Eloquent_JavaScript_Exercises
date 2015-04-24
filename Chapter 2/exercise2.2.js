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
