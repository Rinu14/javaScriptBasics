'use strict';// user strict is same like defining access modifier in javascript same like private,strict mode helps to find bugs and accidental errors as well
/*let hasDriversLicense = true;
const passTest = false;
if (passTest) hasDriversLicense = false;
// if (hasDriverLicense) console.log('I cannot drive 😥');
/* There will occur an error hasDriverLicense is not defined if we use 
strict mode, to correct this use hasDriversLicense instead of hasDriverLicense.*/
// const interface = 'Video';
// const private = 234567;
// const if = 1234;
// variable name like interface,private ,if cannot be use because it is a keyword use in javascript it is detected by strict mode.

//functions is a chunk of code that can use again and again.
/*function logger() {
    console.log('My name is Alaa');

}
// calling/running/invoking function
logger();
logger();

function fruitProcessor(apple, orange) {
    console.log(apple, orange);
    const juice = `jucie with ${apple} apples and ${orange}oranges.`;
    return juice;
    
}
const mixFruitJuice=fruitProcessor(1, 10);
console.log(mixFruitJuice);
// OR
console.log(fruitProcessor(1, 10));
const orangeJuice = fruitProcessor(0, 10);
console.log(orangeJuice);

const appleJuice = fruitProcessor(8, 0);
console.log(appleJuice);
*/
//function declearation or generic function declearation
/*function calAge1(birthYear) {
    const age = 2022 - birthYear;
    return age;

}
const personAge = calAge1(1998);
console.log(personAge);

// or
function calAge1(birthYear) {
    return 2022 - birthYear;
}
const personAge1 = calAge1(1999);


//function expression
const calAge2 = function (birthYear) //anonynomous function 
{
    return 2022 - birthYear;
}
const personAge2 = calAge2(2000);
console.log(personAge1, personAge2);

//arrow function-->'=>'because of this arrow it is called arrow function it returns the value.It is use in one line function.
const calAge3 = birthYear => 2033 - birthYear;// for single parameters
const personAge3= calAge3(2000);
console.log(personAge3);
//for multiple parameters
const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2033 - birthYear;
    const  retirement = 60 - age;
    return `${firstName} will be retire after${retirement} years.`;
}
console.log(yearsUntilRetirement(1998, 'John'));*/
//function calling other functions
/*function fruitCutter(fruit) {
    return fruit * 5;
}
function fruitProcessor(apple, orange) {
    console.log(apple, orange);
    const applePieces = fruitCutter(apple);
    const orangePieces = fruitCutter(orange);
    const juice = `jucie with ${applePieces} apples pieces and ${orangePieces}oranges pieces.`;
    return juice;
    
}
console.log(fruitProcessor(4, 4)); */
//coding challenge 1
/*const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//TestData1
const dolphinScore = calcAverage(44, 23, 71);
const koalasScore = calcAverage(65, 54, 49);
//TestData2
// const dolphinAverage = calcAverage(85,54,41);
// const koalasAverage = calcAverage(23,34,27);
console.log(dolphinScore, koalasScore);

const scoreBoard = function checkWinner(dolphinAverage, koalasAverage) {
    
    if (dolphinAverage >= 2 * koalasAverage) {
        console.log(`Dolphins win (${dolphinAverage} vs.${koalasAverage})`);
    }
    else if (2 * dolphinAverage <= koalasAverage) {
        console.log(`Koalas win (${koalasAverage}vs.${dolphinAverage})`);
    
    }
    else {
        console.log('no one wins😥');
    }
}
scoreBoard(dolphinScore, koalasScore);*/

// arrays --> storing the value in form of data structure
/*const friends = ['Rama', 'Sita', 'Rita'];
console.log(friends);

// const years = new Array(1991, 1992, 1993, 1994);
// console.log(friends[1], years[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);// can be experssion inside the braces

friends[2] = 'Gita'; // can be replace rita with gita
console.log(friends);

const calAge = function (birthYear) {
    return 2030 - birthYear;
}
const years = [1990, 2000, 1999, 2020];
const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length - 1])]
console.log(ages);*/

//basic operations on array (methods)
/*const friends = ['Rama', 'Sita', 'Rita'];
friends.push('Hari');// push() adds element at the end of the array 
const newLength = friends.push('Shyam');
console.log(friends);
console.log(newLength);

friends.unshift('John'); //unshift( )adds element from the begining of the array
console.log(friends);

friends.pop();// remove element from last in the array
const popped = friends.pop();//saves pop element
console.log(popped);
friends.pop();
console.log(friends);

friends.shift();//remove from beigning 
console.log(friends);

console.log(friends.indexOf('Sita'));

console.log(friends.includes('Sita'));//checks that the array contain given value
console.log(friends.includes('Rita'));

if (friends.includes('Sita')) {
    console.log('you have a friend call sita');
}*/



//object "sidhratha is an object whereas firstName,lastName,age,job,slibings are the key,they are also known as property of an object."
/*const sidhratha = {
    firstName: 'Sidhratha',
    lastName: 'Gautam',
    age: 3000 - 1000,
    job: 'Influencer',
    sliblings: ['Ramu', 'Jay', 'Sita']
};
console.log(sidhratha);
console.log(sidhratha.firstName);
console.log(sidhratha.age); 
//console.log(objectName['expression can be written']);
console.log(sidhratha['slibings']);
const nameKey = 'Name';//common name is use as a key
console.log(sidhratha['first' + nameKey]);
console.log(sidhratha['last' + nameKey]);
// const interestedIn = prompt('What do you want to know about me? choose from the below firstName,lastName,age,job,sliblings');
console.log(sidhratha[interestedIn]);


if (sidhratha[interestedIn]) {
    console.log(sidhratha[interestedIn]);

}
else {
    console.log('Wrong Query! please choose from this firstName,lastName,age,job,sliblings');
}
sidhratha.location = 'Sankhamul';
sidhratha['facebook'] = 'sidharatha';
console.log(sidhratha);

//Differences between dot and bracket
// dot operator is use to add the key on the object whereas as bracket display the element on the console.

// classwork
const jonas = {
    firstName: 'Jonas',
    friends: ['Michael', 'Peter', 'Steven']
    
};
console.log(`${jonas.firstName} has ${jonas.friends.length} ,and his best friend is called${jonas.friends[0]}`);
// OR

jonas.numOfFriends = 3;
jonas.bestFriend = 'Michael';

//console.log(`${jonas.firstName} has ${jonas.numOfFriends} , and his best friend is called ${jonas.bestFriend}`);
*/
//object
/*const konica = {
    firstName: 'Konica',
    lastName: 'Minolta',
    manufactureDate: 2000,
    version: 'EII',
    isWorking: true,
//declaring property or method
    // calcAge: function (manufactureDate) {
    //     return 2022 - manufactureDate;
    // }
    //this keyword is use to point the object or properties in the object
//    this keyword is also use to create new variable on the function/method.
    // 
    calcAge: function () {
        this.printerAge = 2022 - this.manufactureDate;
        return this.printerAge;
    }

};
console.log(konica.firstName);
console.log(konica.calcAge());
console.log(konica.printerAge);

//classwork
//"jonas is a 46-year old teacher,and he has a driver's license"
const jonas = {
    firstName:'Jonas',
    birthYear: 1991,
    profession: 'teacher',
    hasDriversLicense: true,
    
    calcAge: function () {
        this.age = 2032 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return`${this.firstName} is a ${this.calcAge()} -year old ${this.profession}, and he has ${this.hasDriversLicense?'a':'no'} driver's license.`
    }

    
}


console.log(jonas.getSummary());
*/

// coding challenge 3

/*const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    massOfMark: 78,
    heightOfMark: 1.69,
    calcMarkBMI: function () {
        this.markBMI = this.massOfMark / (this.heightOfMark * this.heightOfMark);
        return this.markBMI;
    }
}; 
// console.log(mark.markBMI);

const john = {
    firstName: 'John',
    lastName: 'Smith',
    massOfJohn: 92,
    heightOfJohn: 1.95,
    calcJohnBMI: function () {
        this.JohnBMI = this.massOfJohn / (this.heightOfJohn * this.heightOfJohn);
        return this.JohnBMI;
    }
    
};
console.log(mark.calcMarkBMI());
console.log(john.calcJohnBMI());
console.log(`John's BMI ${john.calcJohnBMI()} ${this.calcMarkBMI > this.calcJohnBMI ?
    'is   higher than' : 'is not higher than'} Mark's BMI ${mark.calcMarkBMI()}`);
    */

//loop = repetitve task
// for loop keeps running while condition is TRUE
/*for (let rep = 1; rep <= 10; rep++)
{
    console.log(`Liting weights repetition ${rep}🏋️‍♂️`);
}

//for for arrays
const laptop = [
    'HP',
    'i3',
    246,
    7,
    ['Samsung', 'Lenovo', 'Mac', 'Dell'],
    'portable'
];
const types = [];
for (let i = 0; i < laptop.length; i++){
    //Reading from jonas array
    console.log(laptop[i], typeof laptop[i]);
    //filling types array
    types[i] = typeof laptop[i];
    types.push(typeof laptop[i]);
}
console.log(types);

const years = [1998, 1990, 2000, 2022];
const ages=[]
for (let i = 0;i < years.length; i++){
    ages.push(2022 - years[i]);
}
console.log(`My ages ${ages} `);


//continue and break
console.log("************* PRINT ONLY STRING *************");
for (let i = 0; i < laptop.length; i++){
    if (typeof laptop[i] !== 'string') continue;
    console.log(laptop[i], typeof laptop[i]);

}

console.log("************* BREAK WITH NUMBER *************");
for (let i = 0; i < laptop.length; i++){
    if (typeof laptop[i] === 'number') break;
    console.log(laptop[i], typeof laptop[i]);

}*/

//looping bacckwards and loops in loops

/*const laptop = [
    'HP',
    'i3',
    246,
    7,
    ['Samsung', 'Lenovo', 'Mac', 'Dell'],
    
];
*/
 
//looping backward
/*for (let i =laptop.length-1; i >= 0; i--){
    console.log(i,laptop[i]);
}
//loops in loops
for (let exercise = 1; exercise <= 4; exercise++){
    console.log(`**************Starting exercise ${exercise}********`);
    for (let rep = 1; rep < 5; rep++)
    {
        console.log(`Exercise ${exercise} lifting weight repetition ${rep}🏋️‍♂️.`);
        }
}
console.log(`****Note variable from upper loop can be excess by loop below.*****`);
*/
// while loop


/*let rep = 1;
while (rep <= 5) {
    console.log(`While:Liting weights repetition ${rep}🏋️‍♂️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end..');
}
*/
//coding challenge 2

// const calcTip = function (bills) {
//     if (bills >= 50 && bills <= 300) {
//         const  tips = bills * 0.15;
//         console.log(`The total amount after adding tips is Rs.${bills+tips}.`);
//     }
//     else {
//         const tipsInOtherCase = bills * 0.2;
//         console.log(tipsInOtherCase);
//         console.log(`The total amount after adding tips is Rs.${bills+tipsInOtherCase}.`);
//     }
// }
//OR
/*const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}
// console.log(calcTip(555));

//test data
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);*/

//Coding Challenge 4
const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++)
{
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
};
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
   let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
        
    }
    console.log(sum);
    return sum / arr.length;

}
console.log(calcAverage([4, 5, 6]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));