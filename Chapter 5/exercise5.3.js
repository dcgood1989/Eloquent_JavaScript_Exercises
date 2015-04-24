// // Exercise 5.3
// NOTES ON FIGURING IT OUT
// - Collect a list of Centuries (person.died/100)
// - Build object with centuries
//   "17" : [],
//   "18" : [],
//   "19" : []
// - Fill in the object with ages
// - Then average using the average method for each century
// -

JSON.parse(ANCESTRY_FILE);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var perCentury = {};
ancestry.forEach(function(person) {
    var century = String(Math.ceil(person.died/100));
    if (!(century in perCentury)) {
        perCentury[century] = [];
    }
    perCentury[century].push(person.died - person.born);
});

for (var century in perCentury) {
    console.log(century, '->', average(perCentury[century]));
}
// bonus
function groupBy(a, b) {
    return a.map(b).reduce(function (current, item, id) {
        if (!(item in current)) {
            current[item] = [a[id]];
        } else {
            current[item].push(a[id]);
        }
        return current;
    }, {});
}

function byDeathCentury(person) {
    return String(Math.ceil(person.died/100));
}

var groups = groupBy(ancestry, byDeathCentury);
for (century in groups) {
    var average = average(groups[century].map(function (person) {
        return person.died - person.born;
    }));
    console.log(century, '->', average);
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
