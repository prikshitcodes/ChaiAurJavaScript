//Objects
// 
// lietral => multiple instances
// constrcutor se singelton  bolta . apni tarah ek hota 


  // constrcutor
//  Object.create()



// Object literal

const mySym =Symbol("key1")
const JsUser = {
    name:"Prikshit",
    [mySym]:"mykey1",
    "full name" :"Priksiht Sharma",
    age:22,
    location:"Himachal Pradesh",
    isLoggedIn:false,
    lastLoginDays :["Monday","Saturday"]
}


console.log(JsUser.name)
console.log(JsUser["name"]);
console.log(JsUser["full name"]);

// Acessing Symbol
console.log(JsUser[mySym]);


//Changing Value
JsUser.location="Chamba"

// Freezing the object
// Object.freeze(JsUser)
// JsUser.name="kdsj" // chnage ni hota
// console.log(JsUser.name);




console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JsUser.greeting); // func la refrence ata


// for referening the same obj
JsUser.greetingTwo = function(){
console.log(`Hello js user , ${this.name}`);
}
console.log(JsUser.greetingTwo());

