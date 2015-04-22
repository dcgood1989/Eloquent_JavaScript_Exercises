var min = function(x, y) {
  if (x < y) {
  	return x;
  }
  return y;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// create a variable named min and it eqult to a function that takes 2 arguments. If x is less than y return x, if y < x then return y.

var isEven = function(x) {
  if (x < 0){
  	return isEven(-x)
  }
	if (x === 0)
      return true;
    if (x === 1)
      return false;
  else {
    return isEven(x - 2);
  }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Create a variable name is Even and make it equal to a function that takes 1 argument. If x is less than 0 run the isEven function with a negative x. If x is equal to 0 return true and if its equal to 1 then return false. else return the isEven function

function countBs(string) {
  var bcount = 0;
  for(var i = 0; i < string.length; i++) {
  	if(string.charAt(i) === "B")
      bcount++;
  }
  return bcount;
}

function countChar(string, character) {
  var charCount = 0;
  for (var x = 0; x < string.length; x++) {
  	if (string[x] === character)
      charCount ++;
  }
  	return charCount;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
console.log(countChar("What in the sam hill is going on in here", "i"));

// Create a function countBs that takes a string as an argument. assign a variable to count the b's and equal it to 0. For a variable i = 0 and is less than the string length adding one 1 i each loop. if the string at i is equal to b add to the bcount variable. Return the amount of b's in the string. Then make another function that takes two arguments, a string and character. Assign a variable to count the characters and equal it to 0. For variable x = 0 and less than the string length and add 1 x per loop. If the string at x === to the character provided add 1 to the charCount. Then return charCount.
