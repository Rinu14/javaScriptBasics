// alert('assignment completed!');
/*let country = "Nepal";
let continent = "Asia";
let population = 1243567890
console.log(country);
console.log(continent);
console.log(population);
let isIsland = true;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
//assignment upto  let,const and var

// assignment from basic operator
console.log(population / 2);
console.log(population * 1);
const finlandPopulation = 600000000;
console.log(finlandPopulation > population);
let averagePopulation = 330000000;
console.log(averagePopulation > population);

const description = 'Portugal is in Europe, and its 11 million people speak protuguese';
console.log(description);*/

//using template literal
/*const description = `Portugal is in Europe,and its 11 million people speak protuguese`;
console.log(description);

// if/else statement
const population = 123456789;
if (population > 330000000)
{
    console.log(`Protugal's population is above average.`)

    }
else {
    const averagePopulation = 330000000 - population;
    console.log(`Protugal's population is 22 million below ${averagePopulation}.`);
}*/

//type conversion and coercion
/*console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

const numNeighbours=Number(prompt('How many neighbour countries does your country have?'),);
const numNeighbours = '1';
if (numNeighbours === 1)
{
    console.log('Only 1 border!');

}
else if (numNeighbours > 1)
{
    console.log('More than 1 border!');

}
else {
    console.log('no border!');
}
*/

//logical operators
/*const countrySpeak = 'spanish';
const countryPopulation = 6000000;
const countryType = 'island';
if (countrySpeak === 'English' && countryPopulation <= 5000000000 && countryType != 'island')
{
    console.log('You should live in Portugal!');

}
else {
    console.log('Portugal doesnot meet your criteria');
    }
    */
//switch statement
const language = 'nepali';
switch (language) {
    case 'chinese':
    case 'mandarian':
        console.log('Most number of native speakers!');
        break;
    
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too:');
    
}
// ternary operator
const isCountry = 44000000;
isCountry >= 330000000 ? console.log("Portugal's population is above average") : console.log("Portugal's population is below average.");

console.log(`Portugal's population is  ${isCountry >= 330000000 ? 'above average' : 'below average'}`);