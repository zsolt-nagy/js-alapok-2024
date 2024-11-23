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
let i = 0;
while (i < 10) {
    console.log(i);
    i += 1;
}

/* elszámolás 1-10-ig */
console.log("elszámolás 1-10-ig");
let j = 1;
while (j <= 10) {
    console.log(j);
    ++j;
}

/* tömb iterálása */
console.log("napok H - P for:");
let napok = ["H", "K", "Sze", "Cs", "P"];
i = 0;
while (i < napok.length) {
    console.log(napok[i]);
    ++i;
}

console.log("minden második nap kiírása (kulcs és érték)");
i = 0;
while (i < napok.length) {
    console.log(i, napok[i]);
    i += 2;
}
