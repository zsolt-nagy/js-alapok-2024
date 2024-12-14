// "Van egy szabály, amely kimondja, hogy a belépés akkor engedélyezett,
// ha valaki nem (fiatalabb, mint 18 éves és nem rendelkezik tagsági igazolvánnyal)."

let fiatalabbMint18 = false;
let vanTagságiIgazolványa = true;

if (!(fiatalabbMint18 && !vanTagságiIgazolványa)) {
    console.log("A belépés engedélyezett.");
}

/*
ÁLLÍTÁS: nem (fiatalabb, mint 18 éves és nem rendelkezik tagsági igazolvánnyal).

fiatalabbMint18  vanTagságiIgazolványa   ÁLLÍTÁS
       false            false             true
       false            true              true
       true             false             false
       true             true              true

!(fiatalabbMint18 && !vanTagságiIgazolványa)

!fiatalabbMint18 || vanTagságiIgazolványa

(!fiatalabbMint18 && !vanTagságiIgazolványa) || (!fiatalabbMint18 && vanTagságiIgazolványa) || (fiatalabbMint18 && vanTagságiIgazolványa) 


!(A && B)  <<--->> !A || !B

       false             X                true
       true              true             true
*/

if (!(fiatalabbMint18 && !vanTagságiIgazolványa)) {
    console.log("A belépés engedélyezett.");
}

if (!fiatalabbMint18 || vanTagságiIgazolványa) {
    console.log("A belépés engedélyezett.");
}
