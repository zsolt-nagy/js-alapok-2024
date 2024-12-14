/*
Feladat: írd meg a feltételeket (boolean kifejezés)

"Egy felhasználó csak akkor kap bónusz pontot, ha nem (kevesebb mint 100 pontja 
van és nem aktív az elmúlt héten).";
*/
let score = 85;
let isActive = false;

console.log("hasBonus", !(score < 100 && !isActive));
// !(A && B) <---> !A || !B
console.log("hasBonus", score >= 100 || isActive);
// Konklúzió: csak akkor kap bónuszt ha legalább 100 pontja van vagy aktív volt.

/*
"A belépés tiltott, ha valaki nem (beírta a helyes jelszót vagy használ 
kétfaktoros hitelesítést).";
*/
let isPwdCorrect = true;
let used2FA = true;

console.log("!accessGranted", !(isPwdCorrect || used2FA));
console.log("accessGranted", isPwdCorrect || used2FA); // furcsa...
console.log("!accessGranted", !isPwdCorrect && !used2FA);

/*
"Az alkalmazás nem frissíthető, ha nem (van elég tárhely és engedélyezett 
a frissítés).";
*/
/*
"Az alkalmazás nem frissíthető, ha nem (van elég tárhely és engedélyezett 
a frissítés).";
*/
/*
let hasStorage = false; 
let isUpdateAllowed = false; 
*/
let vanTárhely = true;
let frissítésEngedélyezett = false;

console.log(
    "!frissíthető",
    !(vanTárhely && frissítésEngedélyezett),
    !vanTárhely || !frissítésEngedélyezett
);

/*
"A feladat csak akkor számít késznek, ha 
nem (hiányzik egy részfeladat vagy nincs jóváhagyva).";
*/
let jóváhagyott = true;
let hiányzikRészfeladat = false;
// let részfeladatÁllapot = [true, true, false];
// let hiányzikRészfeladat =
//      részfeladatÁllapot.every(feladatÁllapot => feladatÁllapot);

console.log("kész", !(hiányzikRészfeladat || !jóváhagyott));
console.log("kész", !hiányzikRészfeladat && jóváhagyott);

/*
"Egy esemény automatikusan törlésre kerül, ha 
nem (érkezett elég jelentkezés és megvan az előzetes engedély).";
*/
let jelentkezésSzám = 25;
let jelentkezésLimit = 20;
let vanEngedély = true;

console.log(
    "törölEsemény",
    !(jelentkezésSzám > jelentkezésLimit && vanEngedély)
);
console.log(
    "törölEsemény",
    jelentkezésSzám <= jelentkezésLimit || !vanEngedély
);

/*
"A program hibát dob, ha nem (az adat típusa megfelelő és a formátum érvényes).";
*/
let típusMegfelelő = false;
let formátumÉrvényes = true;

console.log("hiba", !(típusMegfelelő && formátumÉrvényes));
console.log("hiba", !típusMegfelelő || !formátumÉrvényes);

/*
"Egy csomag nem kerül kiszállításra, ha nem (a cím elérhető vagy az ár kifizetett).";
*/
let címElérhető = true;
let árFizetve = false;
console.log("!kiszállít", !(címElérhető || árFizetve));
console.log("!kiszállít", !címElérhető && !árFizetve);
console.log("kiszállít", címElérhető || árFizetve); // értelmetlen...

/*
"Egy vizsgaeredmény nem tekinthető érvényesnek, ha valaki 
nem (részt vett a vizsgán és leadta az összes kötelező dokumentumot vagy az 
eredményét nem vonták vissza).";
*/
let résztVesz = false;
let dokumentumokLead = false; // every-vel minden dokumentumra
let visszavontEredmény = false;

console.log(
    "!érvényesVizsga",
    !((résztVesz && dokumentumokLead) || visszavontEredmény),
    !(visszavontEredmény || (résztVesz && dokumentumokLead))
);

/* Fenti szimuláció */
console.log("visszavontEredmény || (résztVesz && dokumentumokLead)");
console.log(
    "résztVesz",
    "dokumentumokLead",
    "visszavontEredmény",
    "érvényesVizsga"
);
for (let résztVesz of [false, true]) {
    for (let dokumentumokLead of [false, true]) {
        for (let visszavontEredmény of [false, true]) {
            console.log(
                String(résztVesz).padEnd("résztVesz".length),
                String(dokumentumokLead).padEnd("dokumentumokLead".length),
                String(visszavontEredmény).padEnd("visszavontEredmény".length),
                String(visszavontEredmény || (résztVesz && dokumentumokLead))
            );
        }
    }
}
/* A fentinek nincs értelme.

visszavontEredmény || (résztVesz && dokumentumokLead)
résztVesz dokumentumokLead visszavontEredmény érvényesVizsga
false     false            false              false
false     false            true               true
false     true             false              false
false     true             true               true
true      false            false              false
true      false            true               true
true      true             false              true
true      true             true               true

A 2. és a 4. sorban látható, hogy érvényes a vizsga, pedig nem is vett részt
rajta.

résztVesz dokumentumokLead visszavontEredmény állapot
false     false            false              nemÉrvényesVizsga
false     false            true               érvényesVizsga  
false     true             false              nemÉrvényesVizsga
false     true             true               érvényesVizsga 
true      false            false              nemÉrvényesVizsga
true      false            true               érvényesVizsga      
true      true             false              érvényesVizsga
true      true             true               érvényesVizsga      
*/

/*
"Egy megrendelés nem tekinthető teljesítettnek, 
ha nem (a szállítás megtörtént és a számlát kifizették 
és a visszaigazolást megkapták).";
*/
// Feltételek: szállítás, számla kifizetése, visszaigazolás
let szallitasTortent = true; // Példa: a szállítás megtörtént
let szamlaKifizetve = false; // Példa: a számla nincs kifizetve
let visszaigazolasMegkapva = true; // Példa: a visszaigazolás megvan

// Megrendelés teljesített állapotának ellenőrzése
if (!(szallitasTortent && szamlaKifizetve && visszaigazolasMegkapva)) {
    console.log("A megrendelés nem tekinthető teljesítettnek.");
} else {
    console.log("A megrendelés teljesített.");
}

/*
"Egy dokumentum csak akkor számít hitelesnek, 
ha nem (az aláírás hiányzik vagy a pecsét nincs érvényesítve és a 
dátum el van csúszva).";
*/
let dokumentum = {
    aláírt: true,
    érvényesPecsét: false,
    helyesDátum: true, // nincs elcsúszva
};
let { aláírt, érvényesPecsét, helyesDátum } = dokumentum;

if (!(!aláírt || (!érvényesPecsét && !helyesDátum))) {
    console.log("A dokumentum hiteles");
}

if (aláírt && (érvényesPecsét || helyesDátum)) {
    console.log("A dokumentum hiteles (de Morgan átalakítással)");
}

/* Ellenőrzés: */
for (let aláírt of [false, true]) {
    for (let érvényesPecsét of [false, true]) {
        for (let helyesDátum of [false, true]) {
            console.log(
                String(aláírt).padEnd(5),
                String(érvényesPecsét).padEnd(5),
                String(helyesDátum).padEnd(5),
                String(!(!aláírt || (!érvényesPecsét && !helyesDátum))).padEnd(
                    5
                ),
                String(aláírt && (érvényesPecsét || helyesDátum))
            );
        }
    }
}
