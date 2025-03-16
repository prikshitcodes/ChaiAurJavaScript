// Destructing of object
const course = {
    coursename:'js in hindi',
    price:"999",
    courseInstrcutor:"prikshit"
}
// aint optimal to write it again and again course.courseInstrcutor

const {courseInstrcutor : instructor} = course

console.log(instructor);


// const navbar = ()=>{

// }
// navbar(company)="priksiht"
