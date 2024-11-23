/*
for (kezdeti_érték; feltétel; ciklusváltozó_változtatása) {
    ciklustörzs;
}

kezdeti_érték;
while (feltétel) {
    ciklustörzs;
    ciklusváltozó_változtatása;
}
*/

/* elszámolás 0-9-ig */
console.log("első számolás 0-9-ig");
for (let i = 0; i < 10; i += 1) {
    console.log(i);
}

/* elszámolás 1-10-ig */
console.log("elszámolás 1-10-ig");
for (let i = 1; i <= 10; ++i) {
    console.log(i);
}

/* tömb iterálása */
console.log("napok H - P for:");
let napok = ["H", "K", "Sze", "Cs", "P"];
for (let i = 0; i < napok.length; ++i) {
    console.log(napok[i]);
}

console.log("napok H - P for..of:");
for (let nap of napok) {
    console.log(nap);
}

console.log("minden második nap kiírása (kulcs és érték)");
for (let i = 0; i < napok.length; i += 2) {
    console.log(i, napok[i]);
}

console.log("Object.entries(napok): ", Object.entries(napok));
console.log("kulcsok és értékek for..of-fal:");
for (let [i, nap] of Object.entries(napok)) {
    console.log(i, nap);
}
