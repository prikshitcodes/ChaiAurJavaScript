//
const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance); // speicaly cast krta ki number hai

console.log(balance.toString().length);
console.log(balance.toFixed(1)); // last me ek zero add 100.0

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));// kitne value pe precise krna



const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++ MATH ++++++++++

console.log(Math);
console.log(Math.abs(-6)); // 6

console.log(Math.round(5.6));
//for upper and lower
// ceil top and floor down

console.log(Math.floor(4.3));
console.log(Math.ceil(4.1));


console.log(Math.min(4,3,4,2));
console.log(Math.max(3,4,5));

console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

console.log( Math.floor (Math.random() * (max-min + 1)))
