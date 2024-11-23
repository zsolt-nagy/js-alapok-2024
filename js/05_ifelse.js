let bemenet = prompt("Adj meg egy egész számot").trim();
let szám = Number(bemenet);

if (bemenet === null || bemenet === "") {
    console.log("A bemenet nem szám");
} else if (szám % 2 === 0) {
    console.log(szám, "páros");
} else if (szám % 2 === 1) {
    console.log(szám, "páratlan");
} else {
    console.log(szám, "nem egész");
}
