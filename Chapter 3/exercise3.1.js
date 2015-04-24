var min = function(x, y) {
  if (x < y) {
  	return x;
  }
  return y;
}

var min = function (num1, num2) {
  return (num1 <= num2) ? num1 : num2
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// create a variable named min and it equal to a function that takes 2 parameters. If x is less than y return x, if y < x then return y.
