let text = prompt("Enter number:");

text = +text;

function isNumber(value) {
    return typeof value === "number";
}

function error() {
    console.log("Упс, кажется, вы ошиблись.");
}

if (isNumber(text))
    if (Number.isNaN(text))
        error();
    else
        if (text % 2 === 0)
            console.log("Число чётное.");
        else
            console.log("Число нечётное.");
else
    error();