let array = [1, 1, 1];

let firstElement = array[0];
let same = true;
array.forEach(function (item, index, array) {
    if (same != item) same = false;
});

console.log(same);