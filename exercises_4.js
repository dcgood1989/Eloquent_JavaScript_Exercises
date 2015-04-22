// Exercise 4.1


//function range(begin, end, step) {
//   total = [];
//   if(!step)
//     step = 1;
//   if(begin < end)
//     for(var i = begin; i <= end; i = i + step)
//       total.push(i);
// }
//
// function sum(total) {
// 	sum = 0;
//   for (var i = 0; i < total.length; i++)
//     sum += total[1];
//   return sum;
// }

var sum = function(total) {
  sum = 0;
  for (var i = 0; i < total.length; i++)
    sum += total[i];
  return sum;
}
var range = function(begin, end, step) {
  total = [];
  if(!step)
    step = 1;
  if(begin < end)
    for(var i = begin; i <= end; i = i + step)
        total.push(i);
    else if(begin > end)
        for(var i = begin; i >= end; i = i + step)
            total.push(i);
  return total;
}


console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]


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

//Exercise 4.3

function arrayToList(array) {
    var length = array.length;
    function addToList(depth) {
        if (depth >= length) return null;
        return {
            value: array[depth],
            rest: addToList(depth+1)
        };
    }
    return addToList(0);
}

function listToArray(list) {
    function addToArray(array, currList) {
        array.push(currList.value);
        if (!currList.rest) return array;
        return addToArray(array, currList.rest);
    }
    return addToArray([], list);
}

function prepend(el, list) {
    return {
        value: el,
        rest: list
    };
}

function nth(list, depth) {
    if (depth) return nth(list.rest, depth-1);
    return list.value;
}

var arrayGuy = [10,20,30];
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

//Exercise 4.4

function deepEqual(x, y) {
    function isObject(z) {
        return typeof item === "object" && item !== null;
    }

    if (isObject(x) && isObject(y)) {
        if (Object.keys(x).length !== Object.keys(y).length) return false;
        for (var prop in item) {
            if (x.hasOwnProperty(prop) && y.hasOwnProperty(prop)) {
                if (!deepEqual(x[prop], y[prop])) return false;
            } else if (x.hasOwnProperty(prop) || y.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    } else {
        return x === y;
    }
}


console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
