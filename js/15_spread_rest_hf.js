/*
1. Tömbök egyesítése
Írj egy függvényt, amely több tömböt kap paraméterként, és egyetlen tömbben egyesíti őket!
*/

function mergeArrays(...arrays) {
    return [].concat(...arrays);
}

function mergeArrays2(...arrays) {
    let result = [];

    for (let a of arrays) {
        for (let item of a) {
            result.push(item);
        }
    }

    return result;
}

// Példa használat:
console.log(mergeArrays([1, 2], [3, 4], [5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays2([1, 2], [3, 4], [5, 6])); // [1, 2, 3, 4, 5, 6]

/*
2. Legnagyobb szám keresése
Készíts egy függvényt, amely tetszőleges számú számot kap paraméterként, és 
visszaadja a legnagyobbat!
*/

function findMax(...numbers) {
    return Math.max(...numbers);
}

function findMax2(...numbers) {
    let maxValue = -Infinity;

    for (let num of numbers) {
        if (num > maxValue) {
            maxValue = num;
        }
    }

    return maxValue;
}

console.log(findMax(3, 7, 2, 8, 5)); // 8
console.log(findMax2(3, 7, 2, 8, 5)); // 8

/*
3. Objektumok kombinálása
Írj egy függvényt, amely több objektumot kap paraméterként, 
és visszaadja azokat egyesítve (úgy, hogy az utolsó objektum értékei 
felülírják az előzőeket)!
*/
function combineObjects(...args) {
    return Object.assign({}, ...args);
}

function combineObjects2(...args) {
    let result = {};

    for (let o of args) {
        result = { ...result, ...o };
    }

    return result;
}

function combineObjects3(...args) {
    let result = {};

    for (let o of args) {
        for (let key in o) {
            if (o.hasOwnProperty(key)) {
                result[key] = o[key];
            }
        }
    }

    return result;
}

console.log(combineObjects({ a: 1 }, { b: 2 }, { a: 3, c: 4 })); // { a: 3, b: 2, c: 4 }
console.log(combineObjects2({ a: 1 }, { b: 2 }, { a: 3, c: 4 })); // { a: 3, b: 2, c: 4 }
console.log(combineObjects3({ a: 1 }, { b: 2 }, { a: 3, c: 4 })); // { a: 3, b: 2, c: 4 }

/**
4. Az első elem külön kezelése
Készíts egy függvényt, amely egy tömböt kap paraméterként, majd az első elemet külön kezeli, a többit pedig egy új tömbbe gyűjti!
*/

function separateFirstElement(arr) {
    // Destrukturálás, tail a rest paraméter
    let [head, ...tail] = arr;
    return { first: head, rest: tail };
}

function separateFirstElement2([first, ...rest]) {
    return { first, rest };
}

function separateFirstElement3(arr) {
    return {
        first: arr[0],
        rest: arr.slice(1),
    };
}

// ezt ne, inkább tanuld meg a destrukturálást
function separateFirstElement4(arr) {
    let result = {};
    result.first = arr[0];
    result.rest = [];
    for (let i = 1; i < arr.length; ++i) {
        result.rest.push(arr[i]);
    }
    return result;
}

console.log(separateFirstElement([1, 2, 3, 4])); // { first: 1, rest: [2, 3, 4] }
console.log(separateFirstElement2([1, 2, 3, 4])); // { first: 1, rest: [2, 3, 4] }
console.log(separateFirstElement3([1, 2, 3, 4])); // { first: 1, rest: [2, 3, 4] }
console.log(separateFirstElement4([1, 2, 3, 4])); // { first: 1, rest: [2, 3, 4] }

/*
5. Lista szorzása
Írj egy függvényt, amely tetszőleges számú számot kap paraméterként, és visszaadja a számok szorzatát!
*/
function multiplyNumbers(...args) {
    let result = 1;

    for (let arg of args) {
        result *= arg;
    }

    return result;
}

console.log(multiplyNumbers(2, 3, 4)); // 24
