/*  1.
    FizzBuzz maximum értéke legyen paraméter. 
    Oldd meg a feladatot függvényekkel. 
*/

function fizzBuzz(maxValue = 2) {
    for (let i = 1; i <= maxValue; ++i) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(15);
fizzBuzz(2);

/*
    2. Hozz létre egy mini terminál számológépet a négy alapművelettel:
        sum: összeg  a + b 
        diff: difference = különbség  a - b
        prod: product = szorzat a * b
        quot: quotient = hányados  a / b
*/

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function prod(a, b) {
    return a * b;
}

/* nem kezeljük külön a 0-val osztást és a 0/0-t. */
function quot(a, b) {
    return a / b;
}

/*
Ellenőrzés:  5 + 2 * (4 - 2) / 2   <--> 5 + 2*2/2 <--> 7
*/
console.log("elvárt: 7. megoldás:", sum(5, quot(prod(2, diff(4, 2)), 2)));
