//18. Seeing the World: Think of at least five please in the world you,d like to vist
//.Store the locations in a story in a array. Make sure the array is not in alphebetical order.
//.print your array in its ariginal in its original order
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ['cape town', 'delhi', 'faisalbad', 'bankok', 'ahmedabad'];
console.log('original' + places);
//print your array in alphabetical oreder without modifying the actyual list.
console.log('copy ' + __spreadArray([], places, true).sort());
//Show that your array is still in its original order by printing it.
console.log("original :" + places);
//.print your array in revers alphabetical order without changing the original list.
console.log("original :" + places);
