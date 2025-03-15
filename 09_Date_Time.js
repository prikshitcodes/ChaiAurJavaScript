let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());

console.log(typeof myDate);  // Object

//Creating speicific date

let myCreatedDate = new Date(2025,2,15)
console.log(myCreatedDate.toDateString());

let anotherCreatedDate = new Date("2025-03-15")
console.log(anotherCreatedDate.toLocaleString());

console.log(anotherCreatedDate.getTime());
console.log(Math.floor(Date.now()/100)); //  for seconds sec


let newDate = new Date()
console.log(newDate.getDate());


console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));