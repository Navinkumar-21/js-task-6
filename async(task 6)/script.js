/*What is async JavaScript?
Asynchronous programming is a technique that enables your program to start a potentially long-running 
 
task and still be able to be responsive to other events while that task runs, rather than having to wait until that 
task has finished. Once that task has finished, your program is presented with the result*/

/*
The global setTimeout method sets a timer which executes a function or specified piece of code once the timer expires
const myTimeout = setTimeout();*/
setTimeout(() => {
    console.log("Hello world");
  }, 3000);

  const currentTime= new Date().getTime()
  setTimeout(() => {
    console.log(currentTime);
  }, 3000);

  /*clear time out
  The clearTimeout() 
  function in javascript clears the timeout which has been set by setTimeout()function before that
  clearTimeout();*/
  // const count=setTimeout(length,3000)
  // const length=count;
  // for (let i = 0; length; i++) {
  //   console.log(i);
  // }
  
  let count = 0;

   function increaseCount(){

    count += 1;
      console.log(count)
   
  }
  
  let id = setTimeout(increaseCount, 3000);
  
  // clearTimeout
  clearTimeout(id); 
  console.log('setTimeout is stopped.');

/*call back function
A callback is a function passed as an argument to another function.
This technique allows a function to call another function. A callback function can run after another function has finished.*/
function mainfun(getcallFun){
  console.log('main function is executed');
  getcallFun();
}
function callback(){
  console.log('call back function is executed');
}
mainfun(callback);

/*promises in js 
The Promise object represents the eventual completion (or failure) of an asynchronous operation and 
its resulting value.

types
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
const value = null;*/
const Count=true;
const promises = new Promise((resolve, reject) => {
  if (Count) {
    resolve("count has value");
  } else {
    reject("there is no count value");
  }
});
promises.then(console.log).catch(console.log);

/*methods
resolve 
reject 
catch 
then 

example*/
let p= new Promise((resolve,reject)=>{
  let a=1+1;
  if(a==2){
    resolve(' success')
  }else{
    reject(' failed')
  }
})
p.then((message) => {
  console.log('This is in the then' + message)
}).catch((message) => {
  console.log('This is in the catch' + message)
})  
/*An async function is a function declared with the async keyword, 
and the await keyword is permitted within it. 
The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style,
 avoiding the need to explicitly configure promise chains.
 await expression
 await function()*/

 let URL = "https://api.github.com/users/manishmshiva";

 async function getUrl(url) {
   const res = await fetch(url);
   const data = await res.json();
 
   console.log(data);
 }
 
 getUrl(URL);
 /*The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a 
 function or executes a code snippet, with a fixed time delay between each call.
 syntax : setInterval(code, delay)*/

setInterval(myTimer, 3000);

function myTimer() {
  const d = new Date();
  console.log(d.toLocaleTimeString('en-US'));
}

fetch("https://jsonplaceholder.typicode.com/posts",{
  method: 'POST',
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
}).then((res)=>res.json()).then((res)=>console.log(res))
.catch((err)=>console.log(err))

let incount = 0;

function increaseCount(){

 count += 1;
   console.log(count)

}

let time = setInterval(increaseCount, 3000);

// clearTimeout
clearInterval(time); 
console.log('setTimeout is stopped.');


/*diff between settimeout and setinterval
setTimeout allows us to run a function once after the interval of time. setInterval allows us to run a function repeatedly, 
starting after the interval of time, then repeating continuously at that interval.*/