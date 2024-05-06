console.log("hello world !! happy to see you ");
console.log("how are you ? this is javascript !!! ");

Name="tony stark";
age=24;
console.log(Name,age);


let priceBook=550;
console.log(priceBook);

var dumb=10;

var dumb=20; // so dont use var which makes developer confusing instead use let keyword 

const phi=22/7;
console.log(phi);

// phi=22;
// console.log(phi); // gives error while running as phi is const and cannot be changed 

// {
//     let a=5;
//     console.log(a);
// }
// console.log(a); // gives error as let and const are block variables 

// datatypes 

let a=5;
console.log(typeof a);
a=5.5;
console.log(typeof a);
a="hello world";
console.log(typeof a);
a=true;

a=undefined;
console.log(typeof a);
a=null;
console.log(typeof a);
a=BigInt(123);
console.log(a,typeof a);

a=Symbol("hello!")
console.log(a,typeof a);


const student={
    Name:"rahul",
    age:20,
    grade:89.95,
};
console.log(student,typeof student);

console.log(student["age"],student.Name);

student.height=180;
console.log(student);