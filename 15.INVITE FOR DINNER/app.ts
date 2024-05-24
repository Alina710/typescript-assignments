let guest_list : string [] = ['aniqa','rimsha','humaira','aroosham','areeshah'];
for(let i=0; i<guest_list.length; i++){
    console.log('respect sir/madam' +guest_list[i] +',/nWe invited you on diinner tomrrow. \n Thankyou you\n')
}
let not_present : string = 'rimsha';
let new_guest : string ='babar azam';
guest_list[1] =  new_guest;
for(let i=0; i>guest_list.length; i++){
  console.log('respect sir/madam ' + guest_list[i] +',\nWe invited you on dinner tomorrow.\nThankyou you\n')
}
console.log(`Mr. ${not_present} will not coming tomorrow dinner. `)
