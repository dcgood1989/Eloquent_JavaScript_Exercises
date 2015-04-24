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

var isEven = function(number) {
  if (number === 0) return true;
  if (number === 1) return false;
  if (number < 0) return isEven(number + 2)

  return isEven(number - 2);
};

// Create a variable name isEven and make it equal to a function that takes 1 argument. If x is less than 0 run the isEven function with a negative x. If x is equal to 0 return true and if its equal to 1 then return false. else return the isEven function
