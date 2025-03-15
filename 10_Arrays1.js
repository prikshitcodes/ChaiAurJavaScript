//Arrays

const myArr =[0,1,2,3,4]
console.log(myArr[0]);
// shallow copy (same reference , original change) vs deep copy


const myHeros=["shaktiman","aagraj"]

//  myArr = new Array(1,2,3,4)
myArr.push(5)
myArr.push(6) // adding
console.log(myArr);
myArr.pop()// deleting from last
console.log(myArr);

myArr.unshift(9) // starting me add
console.log(myArr);

myArr.shift() // 1st wala uda dena
console.log(myArr);

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9)); // -1 do not exist
console.log(myArr.indexOf(2));


const newArr = myArr.join()

console.log(myArr);
console.log(newArr); // bind kr diya or string bna diya


// slice ,splice


console.log("A",myArr);
const myn1 = myArr.slice(1,3) // last wala mt kro include
console.log(myn1);
console.log("B",myArr);


console.log("A",myArr);
const myn2 = myArr.splice(1,3) // last wala mt kro include
console.log(myn2);
console.log("B",myArr);

// difference bw them
//slice -> last range include ni krti
//splice -> last range krti include
