/*
// for loop syntax 

for (let i=0;i<=5;i++){
    console.log(i*i);
}


// while loop syntax 
let i=0;
while(i!=5){
    console.log(i);
    i+=2.5;
}

//do while syntax 

do{
    console.log(i**2);
}while(i<5);

// for of loop used for strings and arrays 

let string1="hellol";

for ( let a of string1){
    console.log("i=",a);
}


// for in loop used for object and arrays 

human={
    height:2,
    weight:70,
    sex:"male",
    1:5
};

for(let key in human){
    console.log("key=",key," value :",human[key]);
}



/// to do print even numbers 
for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

// user have to guess correct number 

let correct_number=5;
let user_guess;

do{
    user_guess=prompt("guess the correct number");
}while(user_guess!=correct_number);




// strings 

let str="what is the value of the money??"
console.log(str);

let lenght_of_str=str.length;
console.log("the length of the string str is ",lenght_of_str);
console.log("the value at the 6th position of str: ",str[5])


// template literals 
let a=5,b=7;
let specialString=`the addition of a:${a} and b:${b} is ${a+b}`;
console.log(specialString);


// generate a id for a username 
let fullName=prompt("enter full name");
fullName=fullName.toLowerCase().replaceAll(" ","");
let user_id="@"+fullName+fullName.length;
console.log(`the user id with the name ${fullName} is ${user_id}`);
*/

// arrays 
let names=["arha","sai","venkat","koushik"];
console.log(names)

for (let name of names){
    console.log(name.toUpperCase());
}


// find average marks 
let marks =[97,85,76,42,52];
let sum=0;
for (let mark in marks){
    sum+=mark;
}
console.log(`avg marks for the marks : ${marks} = ${sum/marks.length}`);

marks.push(98);
console.log(marks);
marks.pop();
let a=marks.toString();
console.log(a.slice(1,5));

let marks2=[1,2,3,4];
marks=marks.concat(marks2);
console.log("concat",marks);    

marks.splice(1,1,"hi","hello");
console.log(marks);

//
let company =["bloomberg","microsoft","uber","google","ibm","netflix"];
console.log(company);
company.shift();
console.log("remove  first element",company)
company.splice(1,1,"ola")
console.log("replace uber",company);
company.push("amazon");
console.log(company);