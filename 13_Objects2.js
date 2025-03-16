// Object through constrcutor
// const tinderUser = new Object() singelton

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Prikshit"
tinderUser.isLoggedIn = false


const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userFullName:{
            firstname:"priksiht",
            lastname:"sharma"
        }
    }
}
console.log(regularUser.fullname?.userFullName.firstname);


//Merging arrays

const obj1= {1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2} same array pronlem

// const obj3=Object.assign({},obj1,obj2)




const obj3={...obj1,...obj2}
console.log(obj3);

// array ke andr objects and loop through it
const users=[
    {
        id:1,
        email:"priksiht@gmail.com"

    },
    {
        id:2,
        email:"priksiht2@gmail.com"

    },
    {
        id:3,
        email:"priksiht3@gmail.com"

    }
]



users[1].email

console.log(tinderUser);

// sari keys ko leke array me de deta
console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLogged')); // false