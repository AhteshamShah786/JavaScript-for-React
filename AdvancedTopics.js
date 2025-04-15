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


//callback hell
function getData(dataId, nextData){
    setTimeout(()=>{
        console.log("data", dataId);
        nextData();
    },2000)
}
getData(1, ()=>{
    console.log("fetching data 2") 
    getData(2, ()=>{
        console.log("fetching data 3")
        getData(3, ()=>{
            console.log("fetching data 4")  
        })  
    })  
})

