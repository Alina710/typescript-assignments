let magician:string[] = ['harry potter', 'hermion garner', 'ronweasley', 'albus dumbledore'];

function make_greate (magicianArray:string[]){

         for(let i=0; i<magicianArray.length; i++){

          magician[i] = 'the great'+ magicianArray[i]
         }
}

function show_magicians(magicians:string[]) {

    magicians.forEach(element => {
        console.log(element);
    });
} 
make_greate(magician);
show_magicians(magician);
