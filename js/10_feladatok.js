// 1. Írd ki az 'abcdefghij' string betűit külön sorokba console.log segítségével.
//    Használj
//    (a) for ciklust
//    (b) while ciklust
//    (c) for..of ciklust
//    (d) Ismételd meg a fenti feladatot a '𑅰理解する' stringre. Mit tapasztalsz?

// (a)
const text = "𑅰理解する";

console.log("*******1a for*******");
for (let i = 0; i < text.length; ++i) {
    console.log(text[i]);
}

// (b)
console.log("*******1b while*******");
let i = 0;
while (i < text.length) {
    console.log(text[i]);
    i += 1;
}

// c
console.log("*******1c for..of*******");
for (let ch of text) {
    console.log(ch);
}

/*
   2. A napok3 tömbbe tedd bele a napok értékeinek rövidített változatát. A
      röbidített változat mindig 3 betűs ("Mon", "Tue", "Wed", "Thu", "Fri")

      Elvileg mindent megtanultunk ahhoz, hogy működjön a megoldás, de 
      lehet, hogy körülményes lesz megírni.

      Amint készen vagy, írd át a kódot slice segítségével. Nézz utána a slice
      működésének google-lel vagy mesterséges intelligenciával.
*/
console.log("******* 2 *******");
let napok = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let napok3 = [];

for (let nap of napok) {
    napok3.push(nap[0] + nap[1] + nap[2]);
}
console.log(napok3);

/*
    3. Írd ki az első 10 pozitív egész páros számot a konzolra. 
*/
console.log("******* 3 *******");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

/* 
    4. Kérj a felhasználótól egy pozitív egész számot. 
    Írd ki a konzolra az összes olyan pozitív egész számot, amelyek kisebbek 
    vagy egyenlőek, mint a bekért szám. A kiírás növekvő sorrendben történjen.
*/
console.log("******* 4 *******");
/* // Csak böngészőben (+konzol) működik
let felhasznalo = prompt("Adj meg egy pozitív egész számot:");
let szam = Number(felhasznalo);
if (felhasznalo === null) {
    console.log("A bemenet nem szám");
} else {
    felhasznalo = felhasznalo.trim();
    let szam = Number(felhasznalo);
    if (felhasznalo === "" || szam < 0 || Number.isNaN(szam)) {
        console.log("Hibás bemenet");
    } else {
        for (i = 1; i <= felhasznalo; ++i) {
            console.log(i);
        }
    }
}
*/

/*
    5. Oldd meg a FizzBuzz feladatot. Írd ki az első pozitív 100 egész számot
    a konzolra a következő változtatásokkal:
        - Ha a kiírandó szám 3-mal osztható, de 5-tel nem, akkor a szám helyett
          a "Fizz" stringet írd ki.
        - Ha a kiírandó szám 5-tel osztható, de 3-mal nem, akkor a szám helyett
          a "Buzz" stringet írd ki.
        - Ha a kiírandó szám 3-mal és 5-tel is osztható, akkor a szám helyett 
          a "FizzBuzz" szöveget írd ki.
    
    Extra: 100 helyett a felhasználótól is bekérheted a FizzBuzz maximumát.
*/
console.log("******* 5 *******");
for (let i = 1; i <= 100; ++i) {
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
