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
