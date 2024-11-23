let napok = [];

console.log("napok.length:", napok.length); // 0
console.log("typeof napok:", typeof napok); // "object"
console.log("Array.isArray(napok):", Array.isArray(napok)); // true

napok.push("H");
napok.push("K");
napok.push("Sze");
napok.push("Cs");
napok.push("P");

console.log("napok:", napok); // [ 'H', 'K', 'Sze', 'Cs', 'P' ]
console.log("napok.length", napok.length); // 5

// Indexelés
console.log("Első elem: ", napok[0]);
console.log("Második elem: ", napok[1]);
console.log("Utolsó elem: ", napok[4], napok[napok.length - 1], napok.at(-1));

let hónapok = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec", // terminal comma
];

console.log(hónapok[10]);

// Tömbindexeléssel string-ek karaktereit is indexelhetjük.
// Pl. hónapok[10][0]: 'N'
//     hónapok[10][1]: 'o'
// A tömbindexelés string-re csak olvassa az értéket, nem írja
