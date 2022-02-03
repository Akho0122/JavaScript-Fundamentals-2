'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log("I can drive");

// // const interface  = 'Audio'
// // const private = $34;

// function logger(){
//     console.log("My name is Jonas");
// }
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} 
//     apples and ${oranges} oranges.`;
//     return juice;
// };
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0));

// const appleOrangeJuice= fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// FUNCTION DECLARATION
// function calcAge(birthYear){
//     return 2022 - birthYear;
// }
// const age1 = calcAge(2002);

// // FUNCTION EXPRESSION
// const calcAge2 = function(birthYear){
//     return 2022 - birthYear;
// }
// const age2 = calcAge2(2002);

// console.log(age1, age2);

// // ARROW FUNCTION 
// const calcAge3 = (birthYear) => 2037 -birthYear;
// const age3 = calcAge3(2002);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) =>{
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;

// }
// console.log(yearUntilRetirement(2002, "John"));
// console.log(yearUntilRetirement(1999, "Bob"));

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} 
    apples and ${orangePieces} oranges.`;
    return juice;
};
console.log(fruitProcessor(2, 3));