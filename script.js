"use strict";

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

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces}
//     apples and ${orangePieces} oranges.`;
//     return juice;
// };
// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };
// const calcRetirement = function (age) {
//   return 65 - age;
// };

// const yearUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = calcRetirement(age);
//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} has already retired`;
//   }
// };
// console.log(yearUntilRetirement(1950, "Jonas"));
// console.log(yearUntilRetirement(2001, "Mike"));



// const calcAverage = (a, b, c) =>{
//     return  (a + b + c) / 3;
// }
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function(avgDolphins, avgKoalas){
//     if(avgDolphins >= 2 * avgKoalas){
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
//     }else if (avgKoalas >= 2 * avgDolphins){
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
//     }else{
//         console.log("No team wins...")
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas)

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1992, 1993, 1994);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 
// 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function(birthYear){
//     return 2022 - birthYear;
// }
// const year = [1990, 1991, 1992, 1993];
// console.log(calcAge(years[0]));

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), 
// calcAge(years[years.length -1])];

// console.log(ages)

// const friends = ['Michael', 'Steven', 'Peter'];

// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift();
// console.log(friends);
// console.log(friends.indexOf('Steven'));

// friends.push(23)
// console.log(friends.includes('Steven'));
// console.log(friends.includes('23'));

// if(friends.includes('Peter')){
//     console.log('You have a friend called Peter');
// }

// const calcTip = function(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), 
// calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0],
//  bills[1] + tips[1], bills[2] + tips[2]];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Walker',
//     age: 2022 - 2002,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas');

// if(jonas[interestedIn]){
//   console.log(jonas[interestedIn]);
// }else{
//     console.log('Wrong request')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonas';
// console.log(jonas);

// // Challenge
// console.log(`jonas has ${jonas.length} friends, and his best friend is ${jonas[0]}`)


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Walker',
//     birthYear: 2002,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     calcAge: function(){
//       this.age =  2022 - this.birthYear;
//       return this.age;
//     },
//     getSummary: function(){
//         return `${this.firstName} is a 
//         ${this.calcAge()}-year old ${this.job}
//         , and he has ${this.hasDriversLicense 
//         ? 'a' : 'no'} driver's license`
//     }
// };
// console.log(jonas.getSummary());
// console.log(jonas.calcAge()) ;
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// const mark = {
//     fullName: "Mark Muller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };
// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };
// mark.calcBMI();
// john.calcBMI();
// if(mark.bmi > john.bmi){
//    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
// }else{
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`)
// }

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }
// const jonasArray = [
//     'Jonas', 
//     'Walker',
//     2022 - 2002, 
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const types = [];

// for(let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i], typeof jonasArray[i]);
//     // types[i] = typeof jonasArray[i];
//     types.push(typeof jonasArray[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++) {
//     ages.push(2022 - years[i]);
// }
// console.log(ages);

// // continue and break;
// for(let i = 0; i < jonasArray.length; i++) {
//     if(typeof jonasArray[i] !== 'string') continue;
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// for(let i = 0; i < jonasArray.length; i++) {
//     if(typeof jonasArray[i] === 'number') break;
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// const jonas = [
//     'Jonas', 
//     'Walker',
//     2022 - 2002, 
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// for(let i = jonas.length - 1; i >= 0; i--){
//     console.log(jonas[i]);
// }

// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`Starting exercise ${exercise}`);
//     for(let rep = 1; rep < 6; rep++){
//         console.log(`Exercise${exercise} Lifting weight repetition ${rep}`)
//     }
// }

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while(rep <= 10){
    // console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6){
        console.log(`Loop is about to end...`)
    }
}
