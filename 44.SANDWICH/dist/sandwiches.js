"use strict";
function makeSandwich(item) {
    console.log('making your sandwich with:');
    item.forEach(element => console.log("-" + element));
    console.log('enjoy your sandwich !');
}
makeSandwich(['ham', 'cheese', 'lettuce']);
makeSandwich(['turkey', 'bacon']);
makeSandwich(['peanut butter', 'jelly']);
