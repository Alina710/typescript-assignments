//ordinal numbers: ordinal numbers indicate their position ina array, suchbas it
//or 2nd most ordinal numbers end in the expect 1,2and 3.
//store the numbers 1 though 9 in a array

//loop though the array

//use an if-else chain inside the loop to print the proper ordinal ending for each number
//your output should read 1st 2nd 3rd 4th 5th 6th 7th 8th 9th.., and each result should
//be on a separate line

let numbers: number[] = [1,2,3,4,5,6,7,8,9];

for(let num of numbers){
    let ordinalEnding:string;

    if(num === 1){
        ordinalEnding = "st";
    }
    else if(num === 2){
        ordinalEnding = "nd";
    }
    else if(num === 3){
        ordinalEnding = "rd";
    }
    else{
        ordinalEnding ="th";
    }
    console.log(`${num}${ordinalEnding}`)

}
    