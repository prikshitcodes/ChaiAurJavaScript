const name ="Prikshit"
const repoCount = 50

// console.log(name +" " + repoCount + " Value"); outdated method

// string interpolation
console.log(`My name id ${name} and my repo Count is ${repoCount}`);

// Declaraling string

const gameName = new String('GTA-6')
console.log(gameName);

console.log(gameName[0]); //G
console.log(gameName.__proto__); // empty object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('G'));

//Breaking string into parts
const newString = gameName.substring(0,4) // last wali value include ni hoti
console.log(newString);


const anotherString = gameName.slice(-8,3)
console.log(anotherString);

const newStringOne = "  prikshit     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://prikshit.com/prikshit%20sharma"

console.log( url.replace('%20','-'))

console.log(url.includes('prikshit'));// true


// CONVERTING STRING TO ARRAY BASED ON SOMETHING

console.log(gameName.split('-'));





