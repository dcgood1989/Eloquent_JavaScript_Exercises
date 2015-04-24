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
