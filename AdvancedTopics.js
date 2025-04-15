// // Operations
// function sum(a, b) {
//     return a + b;
// }
// function difference(a, b) {
//     return a - b;
// }
// function product(a, b) {
//     return a * b;
// }
// function division(a, b) {
//     if (b === 0) {
//         return "❌ Cannot divide by zero";
//     }
//     return a / b;
// }
// // Generic calculator function
// function calculator(a,b, operationCallback) {
//     const result = operationCallback(a, b);
//     console.log("Result:", result);
// }
// // Using the calculator
// calculator(2, 4, sum);         // Result: 6
// calculator(4, 2, difference);  // Result: 2
// calculator(4, 5, product);     // Result: 20
// calculator(10, 2, division);   // Result: 5
// calculator(10, 0, division);   // Result: ❌ Cannot divide by zero


// //callback hell
// function getData(dataId, nextData){
//     setTimeout(()=>{
//         console.log("data", dataId);
//         nextData();
//     },2000)
// }
// getData(1, ()=>{
//     console.log("fetching data 2") 
//     getData(2, ()=>{
//         console.log("fetching data 3")
//         getData(3, ()=>{
//             console.log("fetching data 4")  
//         })  
//     })  
// })

// to avoid callback hell we use Promises
//promise three states: fullfilled or resolved, reject, pending
//promise we don't create but they are used or consumed when we fetch data from apis then promises are made
// let myPromise = new Promise((resolve,reject)=>{ //resolve and reject are callbacks
// console.log("I am a promise")
// resolve(4)
// reject("error")
// })
// console.log(myPromise)

// const getPromise = () => {
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         resolve("success"); //if commented this line, promise will return failure
//         reject("failure");
//     })      
// }
// let promise = getPromise();
// promise.then((res)=>{ 
//     console.log("promise fulfilled", res);
// })
// promise.catch((err)=>{
//     console.log("promise rejected", err);
// })

//Promise chainging with then
// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data 1");
//             resolve("success")
//         },4000)
//     })
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data 2");
//             resolve("success")
//         },4000)
//     })
// }
// console.log("fetching data 1")
//     asyncFunc1().then((res)=>{
//     console.log(res)
//     console.log("fetching data 2")
//     asyncFunc2().then((res)=>{});
// })



// //callback hell
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//         },2000)
//     })
    
// }

//Promise Chain
// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res)
//     })
// })

//real promise chaining
// getData(1).then((res)=>{
//     return getData(2);
// }).then((res)=>{
//     return getData(3);
// }).then((res)=>{
//     console.log(res);
// })

//async function always returns a promise
// async function hello(){
//     console.log("Hello");
// }
// hello();
//await keyword means to wait: it pauses the execution of its surroundings async function until the promise is settled
//we can only use await inside a async function
function api(){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("Weather data");
            resolve(200);
            },2000);
    })
}
async function getWeatherData(){
    await api();
}
getWeatherData();