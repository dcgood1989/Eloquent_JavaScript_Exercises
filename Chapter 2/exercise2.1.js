// Exercise 1 Looping a Triangle


// var count = i;
// for (var i = 0; i < 7; i++) {
//   console.log(count += '#');
// }

var count = "";
for (var i = 0; i <= 6; i++) {
  console.log(count += "#");
}

var i = "#";
while (i.length < 8) {
  consolelog(i);
  i += "#";
}

for (var i = 0; i <= 8; ++i) {
  var string = "########";
  console.log(string.slice(0,i));
}

var string = "#######",
  result = "";
  for(var i = 0; i <= 8; ++i) {
    result += string.slice(0, i) + "\n"
    console.log(result.trim());
