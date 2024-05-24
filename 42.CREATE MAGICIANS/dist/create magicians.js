"use strict";
let magician = ['harry potter', 'hermion garner', 'ronweasley', 'albus dumbledore'];
function make_greate(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = 'the great' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_greate(magician);
show_magicians(magician);
