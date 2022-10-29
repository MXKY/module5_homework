let array = [1, "два", 3, "четыре"];

console.log(array.length);

array.map(function (item, index, array) {
    console.log(item);
});