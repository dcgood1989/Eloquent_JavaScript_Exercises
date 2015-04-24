// Exercise 5.2

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var hasKnownMother = function(person) {
  return person.mother in byName;
};

function ageDifference(person) {
  return person.born - byName[person.mother].born
}
console.log(average(ancestry.filter(hasKnownMother).map(ageDifference)));

// → 31.2
