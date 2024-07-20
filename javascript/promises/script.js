// asynschronous
// const hello=()=>{
//     console.log("hello");
// }
// const sum=(a,b)=>{
//     console.log(a+b);
// }
// setTimeout(hello);
// sum(5,6);

function getData(id, getNext) {
  setTimeout(() => {
    console.log("data", id);
    if (getNext) {
      getNext();
    }
  }, 1000);
}
// both will execute at the same time
getData(45);
getData(50);

// now 45 will exceute first and then 50
getData(45, () => {
  getData(50);
});

// this will be callback hell if more nesting is done

// for this we use promises

let promise = new Promise((resolve, reject) => {
  console.log("it is a promise");
  resolve("the job is done ");
});

function getDataPromise(id, getNext) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("data", id);
      resolve("sucess");
      if (getNext) {
        getNext();
      }
    }, 5000)
  );
}

// let a=getDataPromise(70);
// console.log(a);

// b=a.then((res)=>(getDataPromise(80)));
// console.log(b);

getDataPromise(1)
  .then((res) => {
    return getDataPromise(2);
  })
  .then((res) => {
    return getDataPromise(3);
  });
