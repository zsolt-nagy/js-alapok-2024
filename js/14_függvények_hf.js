/*
1. Maradékképzés
Írj egy függvényt, amely két számot vár paraméterként (a, b), és visszaadja az 
a b-vel osztva keletkezett maradékát (a % b)
Példa:


function mod(a, b) {
  // Ide jön a megoldás
}

console.log(mod(3, 5)); // 3
console.log(mod(12, 7)); // 5
*/

function mod(a, b) {
    return a % b;
}

console.log(mod(3, 5)); // 3
console.log(mod(12, 7)); // 5

// arrow function - nyíl függvény
const modArrow = (a, b) => a % b;

console.log(modArrow(3, 5)); // 3
console.log(modArrow(12, 7)); // 5

/*
2. Sztring hosszának ellenőrzése
Írj egy függvényt, amely megkap egy sztringet és egy számot, és eldönti, 
hogy a sztring hossza nagyobb-e a megadott számnál!
Példa:

function isLongerThan(string, length) {
  // Ide jön a megoldás
}

console.log(isLongerThan("alma", 3)); // true
console.log(isLongerThan("alma", 5)); // false
*/

function isLongerThan(text, len) {
    return text.length > len;
}

console.log(isLongerThan("alma", 3)); // true
console.log(isLongerThan("alma", 4)); // false
console.log(isLongerThan("alma", 5)); // false

/*
3. Páros szám ellenőrzése
Írj egy függvényt, amely eldönti, hogy egy adott szám páros-e!
Példa:

function isEven(number) {
  // Ide jön a megoldás
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
*/

function isEven(num) {
    // return mod(num, 2) === 0;
    return num % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false

/*
4. Számok összege egy tömbben
Írj egy függvényt, amely kap egy tömböt számokkal, és visszaadja a tömbben 
lévő számok összegét!
Példa:

function sumArray(numbers) {
  // Ide jön a megoldás
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-2, 5, 7])); // 10
*/

function sumArray(arr) {
    // 1. lépés: állapottér
    let sum = 0;

    // 2. lépés: algoritmus leírása, megoldás kiszámítása
    for (let elem of arr) {
        sum += elem;
    }

    // 3. lépés: megoldás visszaadása
    return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-2, 5, 7])); // 10

// Rest paraméter és rekurzió (elméleti, kevésbé hatékony megoldás)
function sumArrayRecursive(arr, sum = 0) {
    // Kilépési feltétel
    if (arr.length === 0) {
        return sum;
    }
    // Rekurzív hívás
    // 1. lépés: állapottér
    let [head, ...tail] = arr; // destrukturálás
    // 2. lépés: algoritmus leírása, megoldás kiszámítása
    sum += head;
    // 3. lépés: megoldás visszaadása
    return sumArrayRecursive(tail, sum);
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-2, 5, 7])); // 10

console.log(sumArrayRecursive([1, 2, 3, 4])); // 10
console.log(sumArrayRecursive([-2, 5, 7])); // 10

/*
5. Fordított sztring
Írj egy függvényt, amely megfordít egy sztringet!
Példa:

function reverseString(str) {
  // Ide jön a megoldás
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
*/

// ha jól ismered a JavaScript beépített függvényeket, akkor sokszor
// tömören meg tudod oldani a feladatokat.
const reverseString = (str) => str.split("").reverse().join("");

// String konkatenációs megoldás (concatenate = egymás után fűz, összefűz)
function reverseString2(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; --i) {
        result += str[i];
    }

    /*  // alternatív megoldás at-tel
    for (let i = 1; i <= str.length; ++i) {
        result += str.at(-i);
    }
    */

    return result;
}

// tömb és join
function reverseString3(str) {
    let result = [];

    for (let i = str.length - 1; i >= 0; --i) {
        result.push(str[i]);
    }

    return result.join("");
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString2("hello")); // "olleh"
console.log(reverseString2("JavaScript")); // "tpircSavaJ"
console.log(reverseString3("hello")); // "olleh"
console.log(reverseString3("JavaScript")); // "tpircSavaJ"

// reverseString2 és 3 összehasonlítása

console.time("string-built-in");
for (let round = 0; round <= 1_000_000; ++round) {
    reverseString(
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident in 
      corrupti aspernatur dicta eaque totam, aut velit ab obcaecati nisi?`
    );
}
console.timeEnd("string-built-in");

console.time("string-concat");
for (let round = 0; round <= 1_000_000; ++round) {
    reverseString2(
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident in 
      corrupti aspernatur dicta eaque totam, aut velit ab obcaecati nisi?`
    );
}
console.timeEnd("string-concat");

console.time("string-join");
for (let round = 0; round <= 1_000_000; ++round) {
    reverseString3(
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident in 
      corrupti aspernatur dicta eaque totam, aut velit ab obcaecati nisi?`
    );
}
console.timeEnd("string-join");
