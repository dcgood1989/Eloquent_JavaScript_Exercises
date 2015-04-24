//Exercise 4.2

function reverseArray(array) {
  var newArray = [];
  for(var i = array.length - 1; i >= 0; i--)
    array.push(array[i]);
  return array;
}

function reverseArrayInPlace(array) {
  for(var i = 0; i < (length / 2); i++) {
      place = array[i];
      array[i] = array[length-i];
      array[length-i] = place;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
