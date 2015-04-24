// //Exercise 4.3
//
// function arrayToList(array) {
//     var length = array.length;
//     function addToList(depth) {
//         if (depth >= length) return null;
//         return {
//             value: array[depth],
//             rest: addToList(depth+1)
//         };
//     }
//     return addToList(0);
// }
//
// function listToArray(list) {
//     function addToArray(array, currList) {
//         array.push(currList.value);
//         if (!currList.rest) return array;
//         return addToArray(array, currList.rest);
//     }
//     return addToArray([], list);
// }
//
// function prepend(el, list) {
//     return {
//         value: el,
//         rest: list
//     };
// }
//
// function nth(list, depth) {
//     if (depth) return nth(list.rest, depth-1);
//     return list.value;
// }
//
// var arrayGuy = [10,20,30];
// console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20



var arrayToList = function(array){
 var obj0={};
 for ( i=(array.length-1); i >= 0 ; i--) {

   var obj1={};

   obj1["value"]=array[i];

   if (i===(array.length-1 )) {
     obj1["rest"]=null;
   }
   else {
     obj1["rest"] = obj0;
   };

   obj0=obj1;
 };
 return obj0;
};

var listToArray = function(list) {
  var array = [];
  for (var hash = list; hash;)
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
