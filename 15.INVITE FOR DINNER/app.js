
var guest_list = ['aniqa', 'rimsha', 'humaira', 'aroosham', 'areeshah'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('respect sir/madam' + guest_list[i] + ',/nWe invited you on diinner tomrrow. \n Thankyou you\n');
}
var not_present = 'rimsha';
var new_guest = 'babar azam';
guest_list[1] = new_guest;
for (var i = 0; i > guest_list.length; i++) {
    console.log('respect sir/madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThankyou you\n');
}
console.log("Mr. ".concat(not_present, " will not coming tomorrow dinner. "));