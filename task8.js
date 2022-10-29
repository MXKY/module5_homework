let map = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry", "blue"]
]);

for (let i of map)
    console.log(`Ключ - ${i[0]}, значение - ${i[1]}`);