let magician : string[] = ['harry potter','hermion granger','ron weasley','albus dumbledore'];

function copyArray(arr:string[]){
    return [...arr]
}

function make_great (magicianArray:string[]){
    for (let i=0; i<magicianArray.length; i++){

        magician[i] ='the great' + magicianArray[i]
    }
}

function show_magicians(magician: string[]){

    magician.forEach(element => {
        console.log(element);
    });
}

const copyMagicianArray = copyArray(magician)

make_great(copyMagicianArray);

console.log('this is my original array');
show_magicians(magician);

console.log('this is my modified copy of the array');
show_magicians(copyMagicianArray);