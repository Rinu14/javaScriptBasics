'use strict ';
//function
/*function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}!`;
}
const country1 = describeCountry('Finland', 6, 'Helsinki');
const country2 = describeCountry('Scotland', 6, 'sinki');
const country3 = describeCountry('Holand', 99, 'Hel');
console.log(country1);
console.log(country2);
console.log(country3);*/

// function declaration vs. expression

//function expression
/*const percentageOfWorld2 = function (population)
{
    return `The percentage of the world population that the given population represents${(population / 7900) * 100}` ;
}
const China=percentageOfWorld1(1233);
const India=percentageOfWorld1(876);
const Nepal=percentageOfWorld1(999);
console.log(China,India,Nepal);*/
//arrow function
/*const percentageOfWorld3 = (countryName, population) => {
    
    
    console.log(`The percentage of ${countryName}the world population that the given population represents${population}`);
}*/
// percentageOfWorld3('china', 123);


/*function percentageOfWorld1(population) {
    // return `The percentage of the world population that the given population represents${(population / 7900) * 100}` ;
    return (population / 7900) * 100;
}
const describePopulation = function (country, population) {
    const percentageOfCountry = percentageOfWorld1(population);
    const description=`${country} has ${population} million people which is about${percentageOfCountry}% of the world.`
    console.log(description);
}
describePopulation('China',123);*/
// assignment of array and basic operator
/*const populations = [123, 345, 456, 567];

console.log(populations.length===4);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]),percentageOfWorld1( populations[2]),percentageOfWorld1 (populations[populations.length - 1])];
console.log(percentages);
    
const neighbours = ['Italy', 'Turkey', 'France', 'Chile'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes('Germany')) {
    console.log('Its a central European Country😃');
}
else{
    console.log('Proabably not a central European country😌');
}

console.log(neighbours.indexOf('France')) = 'Republic of France';
console.log(neighbours);*/
// introduction to objects and dot vs.Bracket notation
const countryDescription = {
    countryName: 'Finland',
    population: 6,
    language: 'Finnish',
    neighbour: ['Greenland', 'Italy', 'Iceland'],
    capitalCity: 'Helsinki',
    isIsland: true,
    
    // console.log(`${countryDescription.countryName} has ${countryDescription.population} million ${countryDescription.language} speaking people,${countryDescription.neighbour.length} neighbouring countries and a capital called ${countryDescription.capitalCity}`);
    //object methods
    describe: function () {
        
       console.log( `${this.countryName} has ${this.population} million ${this.language} - speaking people,${this.neighbour.length} neighbouring countries and a capital city called ${this.capitalCity}.`);
    },
    checkIsland: function (isIsland) {
        this.isIsland = this.neighbour.length === 0 ? true : false;
        
    }
    
};
countryDescription.describe();
countryDescription.checkIsland();
console.log(countryDescription);

//iteration :forloop
for (let voters = 1; voters <= 50; voters++){
    console.log(`Voter number${voters} is currently voting.`)
}

//looping arrays,breaking and continuing
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const percentages2 = [];
const populations = [123, 345, 456, 567];
for (let i = 0; i < populations.length; i++){
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
    
}
console.log(percentages2);

//looping backwars and loops in loops
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
];
for (let i = 0; i < listOfNeighbours.length; i++)
{
    for (let y = 0; y < listOfNeighbours[i].length; y++)
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    
    }

    //while loop
const percentage3 = [];
let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentage3.push(perc);
    i++;
}
console.log(percentage3);