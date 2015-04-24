// Exercise 5.4

// EVERY
// -Create a function called every that takes an array and another function (predicate). Then we loop through everything in the array and see if each thing === predicate?
//   returns true
// -As soon as one !== predicate?
//   returns false
//
// SOME
// -Loop through each thing, as soon as 1 predicate returns true then we return true to the whole else return false

function every(array, predicate) {
  for (var i = 0; i < array.length; i++){
    if (!predicate(array[i])) {
     return false;
    }

  }
  return true;
}

function some(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return true;
    }
    else
      return false;
  }
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
