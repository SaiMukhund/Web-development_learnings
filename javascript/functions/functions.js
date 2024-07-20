// functions

function sum(a,b){
    return a+b;
}

c=sum(5,7);
console.log(c);


// arrow function 

const multiplication=(a,b)=>{
    return a*b;
};

console.log(multiplication(7.2,3.1));


// no of vowels 

function no_of_vowels(str){
    let count=0;
    for(let chr of str.toLowerCase()){
        if (chr=="a" || chr=="e" || chr=="i" || chr=="o" || chr=="u" ){
            count++;
        }
    }
    console.log( `the number of vowels in the string ${str} is ${count}`);
}
const arrow_vowels=(str)=>{
    let count=0;
    for(let chr of str.toLowerCase()){
        if (chr=="a" || chr=="e" || chr=="i" || chr=="o" || chr=="u" ){
            count++;
        }
    }
    console.log( `the number of vowels in the string ${str} is ${count}`);
}
let str=prompt("enter any string ");
no_of_vowels(str);
arrow_vowels(str);


let arr=[1,2,3,4];
arr.forEach((val,idx)=>{
    console.log(`at ${idx} the val is ${val}`);
})
let new_array=arr.map((val)=>{
    return val**2;
})
console.log(new_array);

new_arr=arr.reduce((res,val)=>{
    console.log(res,val);
    return res-val;
})
console.log(new_arr);


