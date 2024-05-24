var guest_list = ['aniqa', 'rimsha', 'humaira', 'aroosham', 'areeshah'];
//for (let i = 0; i < guest_list.length; i++) {
//  console.log('respect sir/madam' + guest_list [i] + ',/nWe invited you on diinner tomrrow. \n Thankyou you\n');
//}
var not_presen = 'rimsha';
var new_gues = 'babar azam';
guest_list[1] = "new_guest";
//for (let i = 0; i > guest_list.length; i++) {
// console.log('respect sir/madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThankyou you\n');
//}
guest_list.unshift('aniqa', 'rimsha', 'rizwan');
//for (let i = 0; i < guest_list.length; i++) {
//  console.log('respect sir/madam' + guest_list[i] + ',/nWe invited you on diinner tomrrow. \n Thankyou you\n');
//}
console.log('\nUnfortunately we can not arrange big tabel , only two people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry sirMadam.".concat(remove_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow. we found big tabel so we decide to invite 3 more guest\nThankyou you\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
