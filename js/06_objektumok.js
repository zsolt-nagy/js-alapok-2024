let adat = null;
let szótár = {
    understand: "理解する",
    hill: "丘",
    big: "大きい",
};

console.log(typeof adat); // object
console.log(typeof szótár); // object
console.log("szótár: ", szótár); // { understand: '理解する', hill: '丘', big: '大きい' }
console.log("Object.keys(szótár): ", Object.keys(szótár)); // [ 'understand', 'hill', 'big' ]
console.log("Object.values(szótár): ", Object.values(szótár)); // [ '理解する', '丘', '大きい' ]
console.log("Object.entries(szótár): ", Object.entries(szótár)); // [ [ 'understand', '理解する' ], [ 'hill', '丘' ], [ 'big', '大きい' ] ]
console.log("szótár.understand: ", szótár.understand); // 理解する
console.log("szótár['hill']: ", szótár["hill"]); // 丘

console.log("szótár.nemLétezik: ", szótár.nemLétezik); // undefined
console.log("typeof undefined: ", typeof undefined); // 'undefined'

// új érték beillesztáse:
szótár["go"] = "行く";
szótár.I = "私";

console.log(szótár); // { understand: '理解する', hill: '丘', big: '大きい', go: '行く', I: '私' }

// érték törlése:
delete szótár["I"];
console.log(szótár); // { understand: '理解する', hill: '丘', big: '大きい', go: '行く' }
