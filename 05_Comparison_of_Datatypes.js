console.log(2>1); // true
console.log(2==2); // true


console.log("2" >1); // true
console.log("02">1); // true
console.log("2abc">1); // false

console.log(null >= 0); // true
console.log(null == 0); // false
console.log(null>0); // false


console.log(undefined == 0);// false


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id ===anotherId);  // false


const heros = ["shaktiman","naagraj",'doga']


 let myObj ={
name:"Prikshit",
age:22
}

//function with variable

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof myFunction); // function

