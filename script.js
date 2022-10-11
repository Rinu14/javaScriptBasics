/*let js='amazing';
      //if(js === 'amazing')alert('Programming is Fun!');
console.log(90 - 45 + 69);
console.log('John!');
// firstName is a variables
let lastName = "jonas";
let firstName = "Nick";
console.log(firstName + ' ' + lastName);*/


/*let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

console.log(typeof true);

javaScriptIsFun = 2022;
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(typeof year);

console.log(typeof null);*/

/*let age = 20;
age = 22;

const dob = 1998;
// dob = 1999; cannot change the value

const PI = 3.14;
var job = 'radiographer';
job = 'hub operator'*/


// console.log(job);
//Math operator
//defining variable now for same year number
/*const now =2022;
const ageRam = now - 1998;
const ageHari = now - 2000;
console.log(ageRam, ageHari); 

console.log(ageRam * 2, ageHari / 10, 2 ** 3)
//2**3 means 2 to the power of 3=2*2*2

const firstName = 'Nick';
const lastName = 'Jonas';
console.log(firstName + ' ' + lastName);
//assignment operator

let x = 10 + 5;
x += 10;
x *= 4;
x -= 23;
//x = x+10;
console.log(x);

//boolean experession
console.log(ageHari > ageRam);
console.log(ageRam > ageHari);
console.log(ageHari >= 18);

const isFullAge = ageHari >= 18;

console.log(now - 1991 > now - 2018);
 // showing prescendence of operator by seeing the table on MDN web docs
let a, b;
a = b = 30 - 20 - 5;//a=b=10
console.log(a, b);
const averageAge = (ageRam + ageHari)/2;
console.log(ageRam, ageHari, averageAge);*/

//coding challenge part 1
/*let markMass, markHeight, johnMass, johnHeight;
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;
// markMass = 95;
// markHeight = 1.88;
// johnMass = 85;
// johnHeight = 1.76;
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI,johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//CODING CHALLENGE 2
if (markBMI > johnBMI) {
      console.log(`Mark's BMI ${markBMI} is higher than John's${johnBMI}`);

}
else {
      console.log(`John's BMI ${johnBMI} is higher than Mark's${johnBMI}`);
}



// string literals
const firstName = "Nick";
const job = "singer";
const dateOfBirth = 1990;
const currentYear = 2022;
const nick = "I'm" + firstName + ", and I'm" +' '+ ( currentYear - dateOfBirth) + ' '+"year's old"+' ' + job + '!';
console.log(nick);



//for template literals use `${variablename}` .`` is used to denote template literals.

const newNick = `I'm ${firstName},a ${currentYear-dateOfBirth} year's old ,${job}`;
console.log(newNick);

console.log(`I'm ${firstName}`);
console.log(`I'm ${firstName} \n I'm ${currentYear - dateOfBirth} year's old.\n I'm ${job}.`); // this line of code and below line of code are similar u can use according to ur wish
console.log(`I'm ${firstName} 
I'm ${currentYear - dateOfBirth} year's old.
 I'm ${job}.`);

 // ifelse statement
const age = 12;
// const validateForLicense = age >= 18;
if (age>=18)
{
    console.log(`Congraulations ! You are able to apply for License.`);
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sorry! you cannot apply now. Comeback after ${yearsLeft} years`)
}
// Example 2 ifelse using global variable.
const birthYear = 2022;
let century;

if (birthYear <= 2000) {
      century = 20;

}
else
{
      century = 21;
}
console.log(century);

//type conversion and coercion
//  type conversion :- manually changing data type  whereas cohersion is automatically changing data type


const inputYear = "2033";
console.log(Number(inputYear), inputYear); //Number() is use to convert string to number.
console.log(Number(inputYear) + 18);


console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

console.log("I'm " + 23 + "year's old");

console.log('23' + '12' - 4); // 23 +12 =2312 and then sub 2312-4 =2308
console.log('23' > '18');
*/

      
//truthy and falsy value = changing the value into boolean form
// falsy value = 0,Null, NaN, Undefined,''
//truthy value = everything except falsy values
/*console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean('Water'));
console.log(Boolean(2));


const job = 0;
if (job) {
      console.log(`Yes,you wiil have money soon!`);

}
else {
      console.log('Find your job');
}
      

let height;
height = 23;
if (height) {
      console.log(`Height is defined ${height}`);

}
else {
      console.log('Height is undefined');
}
*/

//equality operators
/*const age = 18;
if (age === 18) console.log('You just become an adult is strict');
if (age == 18) console.log('You are adult now :loose');
// === strict assignment operator
// == use for type coercsion if '18'==18 then it is true whereas '18'===18 is false.
const lucky = Number(prompt("What's your lucky number?"));
console.log(lucky);
console.log(typeof lucky);
if (lucky === 22) {
      console.log(`This is number`);
}
else if(lucky == 2)
{
      console.log(`This is also number`);
}
else {
      console.log('value is not lucky');
}
if (lucky != 22) console.log('enter 22');*/

/*//boolean logic
const hasDriverLicense = true;
const hasGoodVision = true;
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasGoodVision);
// if ( hasDriverLicense && hasGoodVision)
// {
//       console.log('Rita is able to drive');

// }

// else {
//       console.log('Papa drive please!');
// }

const isTried = false;

if (hasDriverLicense && hasDriverLicense && !isTried) {
      console.log("Rita has driving license, good vision and she is not tried");
}
else {
      console.log(`Rita has driving license,good vision but she is tried.`);
} 
*/

// const dolphinsRound1 = 96;
// const dolphinsRound2 = 108;
// const dolphinRound3 = 89;

// const koalasRound1 = 88;
// const koalasRound2 = 91;
// const koalasRound3 = 110;

// const dolphinsRound1 = 97;
// const dolphinsRound2 = 112;
// const dolphinRound3 = 101;

// const koalasRound1 = 109;
// const koalasRound2 = 95;
// const koalasRound3 = 123;

// const dolphinsRound1 = 97;
// const dolphinsRound2 = 112;
// const dolphinRound3 = 80;

// const koalasRound1 = 109;
// const koalasRound2 = 95;
// const koalasRound3 = 50;


// const minimumScore = 100;
// const highestScoreDolphin = dolphinsRound1 + dolphinsRound2 + dolphinRound3;
// const highestScoreKoalas = koalasRound1 + koalasRound2 + koalasRound3;
// const highestScore = highestScoreDolphin > highestScoreKoalas;
// if (minimumScore < highestScore && highestScoreDolphin > highestScoreKoalas)
// {
//       console.log('Yeah! wins trophy');

// }
// else if (){
      
// }

/*const averageScoreDolphin = (dolphinsRound1 + dolphinsRound2 + dolphinRound3) / 3;
const averageScoreKoalas = (koalasRound1 + koalasRound2 + koalasRound3) / 3;
console.log(averageScoreDolphin, averageScoreKoalas);

if (averageScoreDolphin > averageScoreKoalas && averageScoreDolphin>=100 )
{
      console.log("Dolphins are winner!");
}
else if(averageScoreDolphin === averageScoreKoalas && averageScoreDolphin>=100 && averageScoreKoalas>=100 )
{
      console.log("Both are winner!");

}
else if (averageScoreKoalas > averageScoreDolphin && averageScoreKoalas>=100){
      console.log("Koalas are winner!");
}
else {
      console.log('both are loser');
}
*/
// switch statement
const day = 'sunday';
switch (day)// checks for === strict equality
{
      case 'monday':
            console.log('Plan course Structure');
            break;
      case 'tuesday':
            console.log('tuesday morning love you');
            break;
      case 'wednesday':
      
            console.log('wednesday morning love you');
            break;
      case 'thursday':
            console.log('thursday morning love you');
            break;
      case 'friday':
            console.log('friday morning love you');
            break;      
      case 'saturday':
            console.log('I wanna love you everyday');
            break;
      case 'sunday':
            console.log('sunday is holiday');
            break;
            default:
            console.log('Not valid day');

}

//statement
if (34 > 0) {
      const str = '34 is bigger';
}
// expression 2+3 {45*(4+5)};

// ternary operator
const age = 30;
age >= 18 ? console.log('I like to drink wine🍺') : console.log('I like to drink juice🥤');
const drink=age >= 18 ? 'wine🍺' : 'juice🥤';
console.log(drink);

console.log(`I like to drink${age >= 18 ? 'wine🍺' : 'juice🥤'}`);

//coding challenge 4
// const bill = 275;
// const tipOnAverage = bill * 0.15;
// const tipAtmost = bill * 0.2;

// bill >= 50 && bill <= 300 ? console.log(`The bill was${bill}, the tip was ${tipOnAverage} and the total value ${bill + tipOnAverage}`):console.log(`The bill was${bill}, the tip was ${tipAtmost} and the total value ${bill + tipAtmost}`);



// or simply
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total bill will be${bill+tip}`);




