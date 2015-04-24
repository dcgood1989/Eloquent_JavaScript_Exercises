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
