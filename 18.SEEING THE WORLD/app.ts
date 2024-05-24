//18. Seeing the World: Think of at least five please in the world you,d like to vist
//.Store the locations in a story in a array. Make sure the array is not in alphebetical order.
//.print your array in its ariginal in its original order

let places : string [] = ['cape town','delhi','faisalbad','bankok','ahmedabad']
console.log('original' + places);
//print your array in alphabetical oreder without modifying the actyual list.
console.log('copy ' + [...places].sort());
//Show that your array is still in its original order by printing it.
console.log(`original :` + places);
//.print your array in revers alphabetical order without changing the original list.
console.log(`original :` + places)