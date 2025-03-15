//Adding arrays

const marvel_heros = ["thor","ironman","spiderman"]

const dc_heros = ["superman","flash","batman"]


//1 push method
 //marvel_heros.push(dc_heros)
// console.log(marvel_heros); // array ke andr array


// 2 Concat Method => return krta new array

const all_Heros = marvel_heros.concat(dc_heros)
console.log(all_Heros);

// 3 spread operator

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);

//destructing array
const another_Array = [1,2,3,[4,5,6],7,[8,9,10]]
const real_another_array = another_Array.flat(Infinity)
console.log(real_another_array);


//checking array
 console.log(Array.isArray("Prikshit")) // false
 console.log(Array.from("priksiht"));


 // intersting case
 console.log(Array.from({
    name:"Priksiht"
 })); // it gives empty array
 //specify to give array should be of key or values


 let score1 =100
 let score2=200
 let score3=300
 console.log(Array.of(score1,score2,score3));

 