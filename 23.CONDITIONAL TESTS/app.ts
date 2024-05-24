let car:string = 'subaru';
//test1; equality comparsion (true)
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru'); //true

// test 2: strict equality comparision (true 
console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru'); //true

//test3; inequality comparison (false)
console.log("Is car !='subaru'? I predict false.");
console.log(car != 'subaru'); //false


//test4 ; strict inequality comparision (false)
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru'); //false



//test5 ; less than comparision (true)
console.log("Is car  <'subaru'? I predict false.");
console.log(car < 'subaru'); //false (lexicographic comparison)

//test6 ; greater than  comparision (true)
console.log("Is car > 'subaru'? I predict false.");
console.log(car > 'subaru'); //false (lexicographic comparison)

//test7 ; less than or equal comparison (true)
console.log("Is car <= 'subaru'? I predict false.");
console.log(car <= 'subaru'); //true

//test8 ; greater thann or eaqual  comparision (true)
console.log("Is car >= 'subaru'? I predict true.");
console.log(car >= 'subaru'); //true

//test9 ; greater than  comparision (true)
console.log("Is car? 'subaru'? I predict true .");
console.log(car); 'subaru'; //true (non epmty striing is truthly)

