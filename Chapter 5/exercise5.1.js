// Exercise 5.1

// Works but no reduce
var arrays = [[1, 2, 3], [4, 5], [6]];
arrays[0].concat(arrays[1], arrays[2])
// → [1, 2, 3, 4, 5, 6]

//??
var arrays = [[1, 2, 3], [4, 5], [6]];
arrays.reduce(function(carry, current){
  var newArray=current.concat(carry)
})
console.log(newArray)
// → [1, 2, 3, 4, 5, 6]

// ALMOST
var arrays = [[1, 2, 3], [4, 5], [6]];
function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}
// → [1, 2, 3, 4, 5, 6]

// WORKS
var arrays = [[1, 2, 3], [4, 5], [6]];
var x = (arrays.reduce(function(carry, current) {
  return carry.concat(current);
}, []));
console.log(x)
// → [1, 2, 3, 4, 5, 6]
