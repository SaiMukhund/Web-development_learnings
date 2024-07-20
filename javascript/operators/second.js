// this is single line comment 
/*
this is a multiple line comments 
*/


console.log("hello world");

// operatorss 

let a=5;
let b=7;
let c=a+b;
let d=a-b;
let e=a*b;
let f=a/b;
console.log("a+b=",c);
console.log("a-b=",d);
console.log("a*b=",e);
console.log("a/b=",f);

let g=7%2;
console.log("remainder when 2 divides 7 is ",g);
let h=2**3;

console.log("the exponent of 2 to the power 3 is ",h);

//unary operators
a=4;
console.log(a);
a--;
console.log(a);
a++;
console.log(a);
b=a;
post=a++;
console.log('post increment',post,a);
pre=++b;
console.log("pre increment",pre,b);


//assignment operators 

a=4;
b=5;
a+=4;
console.log("a=",a);
a-=b;
console.log("a=",a);
a*=b;
console.log("a=",a);


// comparison

console.log(a==b);
console.log(a>b);
console.log(a<=b);

a="12";
b=12;
console.log(a==b); // doesnt check the type of variabless 

console.log(a===b); // checks the type and value 

// logical operators 
a=4;
b=2;
console.log((a-b)>2 && a+b<10);
console.log((a-b)>2 || a+b<10);


//
let num=prompt("Enter a number");
console.log(typeof num);
if(num%5===0){
    alert("number "+num+" is divisible by 5");
}
else{
    alert("nummber "+num+" not divisible by 5");
}