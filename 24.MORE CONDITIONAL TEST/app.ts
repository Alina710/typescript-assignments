let car: string = 'subaru';
let age: number = 25;
let numbers: number[] = [1, 2, 3, 4];














//**string test**

//test 1: equality (true)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //True (case-insensitive)
//test 2; strict equality (false )
console.log("Is car === 'subaru'? I predict false.");
console.log(car === 'subaru'); //false  (case-sensitive)





//test 3; inequality (true)
console.log("Is car |= 'toyota'? Ipredict True.");
console.log(car != 'toyoto'); //True



//test 4; inequality (false)
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru'); //false (case-sensitive)


//lowercase  funtions test
console.log("Is car. tolowercase() == 'subbaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru'); //true (converted to lowercase)

//test6; lowercase conversion (false)
console.log("Is car === car.tolowercase()? I predict false.");
console.log(car === car.toLowerCase()); //false (original value remains upp)

//numerical tests
//test 7; equality (true)
console.log("Is age === 25? I predict true.");
console.log(age ==25);//true

//test8; inequality (false)
console.log("Is age != 30? I predict True.");
console.log(age !=30); //true



//test 9; grether than (false)
console.log("Is age > 30? I predict false.");
console.log(age > 30); //false 

//test10; lessthan or equal(true)
console.log("Is age <= 25? I predict true.");
console.log(age <= 25); //true

//logical operators
//test 11; and (true)
console.log("Is age > 20 && age > 30? I predict true.");
console.log(age > 20 && age < 30); //true (both conditionas met)
 //tst 12; OR  (false)
 console.log("Is age > 30 || age < age < 18? I predict false.");

//array tests

//test 13; In araay (true)
console.log("Is  3 in numbers? I predict true.");
console.log(3 in numbers); //true (checks for index existence)

//test 14; not in array (false)
console.log ("Is 5 not in numbers? I predict true.");
console.log(5  in numbers); //true (negetion of"in opreators")





