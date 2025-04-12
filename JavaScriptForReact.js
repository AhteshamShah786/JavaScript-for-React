// Destructuring  means extracting(unpacking) the data from objects and arrays and assigning them to new variables
// We use it for api fetching
//This is an object
let studentData = {
    name: "Ahtesham",
    degree : "MS Computer Science",
    graduation : 2025,
    skills: ["Mern Stack", "AI Expert"],
    education: {
        matric: "Science",
        inter: "Engineering"
    },
    hobbies: function (hobby){
        //printing by loop
        for(const key in hobby){ //it's an object so 'for in loop' is used
            console.log(`${key} : ${hobby[key]}`);
        }
    }
}

//normal way to extract data from object
// const studentName = studentData.name;
// const studentDegree = studentData.degree;
// console.log(studentName);
// console.log(studentDegree);
// console.log(studentData.education);


// // Destructuring and using the key names as variables to extract data to variables
// const {name, degree} = studentData;
// console.log(name);
// console.log(degree);


// Object Destructuring by changing the name of keys(Assigning other names) used in object
// const {name:studentName, degree:degreeName, graduation:graduationYear} = studentData;
// console.log(studentName, degreeName, graduationYear);


//mutating variables with destructuring
// let a = 5
// let b = 6;
// console.log(a,b)
//  const obj = {
//     a : 7,
//     b : 8
// };
// ({a,b} = obj);
// console.log(a,b)

// let {a, b} = obj;
// console.log(`before mutating a = ${a} and b = ${b}`);
// // Swap values
// [a, b] = [b, a]; 
// console.log(`after mutating a = ${a} and b = ${b}`);


//accessing array inside object
// const {name , skills:[skill1, skill2]} = studentData;
// console.log(name, skill1,skill2);

//extracting object inside object
// const {name, education} = studentData;
// const {matric, inter } = education;
// console.log(name, matric, inter)

//another and easy other method to access it
// const {name, education:{matric, inter}} = studentData
// console.log(name, matric, inter);

//calling function from object by passing object as a parameter
// studentData.hobbies({
// morning : "walking",
// afternoon : "nap",
// night: "watching movies",
// random : "reading"
// });




//This is an Array (Destructuring)
// const studentData = 
// [
//     {
//     name: "Ahtesham",
//     degree : "MS Computer Science",
//     graduation : 2025,
//     skills: ["Mern Stack", "AI Expert"],
//     education: {
//         matric: "Science",
//         inter: "Engineering"
//     },
//     hobbies: function (hobby){
//         //printing by loop
//         for(const key in hobby){ //it's an object so 'for in loop' is used
//             console.log(`${key} : ${hobby[key]}`);
//         }
//     }
// },
// ];
// const [data] = studentData; //destructuring array to access object inside
// console.log(data);

//const arr = [1,2,3,4,5];
// const [first, , , ,fifth, sixth = 6] = arr //commas are creating hole otherwise it assigns sequentially to the variables
// console.log(first,fifth, sixth);


// let arr = [2, 3];
// let [a, b] = arr;
// console.log(`before mutating a = ${a} and b = ${b}`);
// // Swap values
// [a, b] = [b, a]; 
// console.log(`after mutating a = ${a} and b = ${b}`);



//syntax of ... rest operator , it should always be at the last, rest means remaining
// rest operator creates a new array and stores the remaining elements in it
// const arr = [1,2,3,4,5];
// const [a, b, ...otherNumbers] = arr;
// console.log(a,b,otherNumbers);


//... rest operator in a function (we can take any number of parameters due to rest operator)
// ... rest operator allows us to pack multiple elements into a single array
// function sum(...data){
//     // let total=0;
//     // for(const number of data){
//     //     total += number;
//     // }
//     // return total;
// }
// console.log(sum(4,6));
// console.log(sum(7,3,6));
// console.log(sum(8,50, 5, 8));
// console.log(sum(9,78, 2, 4, 1 , 6 ));




// Spread Operator
//expand an array to all its elements, or unpacking the elements from array
// syntax is same as rest operator (...)
// const array = [3,4,2,2,1];
// console.log(array);
// //spread operator
// const newArray = [...array];
// console.log(newArray);
// /// we can use spread operator in any part of array
// const newArray1 = [1, 2 , ...array, 5, 6]
// console.log(newArray1);



//Spread Operator in objects
// const dataUpdate = {
//     ...studentData,  //if you don't give ... dots here then it will not access all key value pairs but the whole object
//     relationship: "single"
// };
// console.log(dataUpdate);

//if you want to make change in original one then first of all change const to let
// studentData.relationship="single";
// console.log(studentData);

// we can override a value if we make it after the ... studentData
// const dataUpdate = {
//         graduation : 2026, //will not override
//         ...studentData,   
//         graduation : 2026, //will override  
//         relationship: "single"
//     };
//     console.log(dataUpdate);

//using both spread and rest operators
// const frontend = ["HTML", "CSS", "JavaScript"];
// const backend = ["Node.js", "Express", "MongoDB"];

// // 1. Spread: Merge
// const fullStack = [...frontend, ...backend];
// console.log("Full Stack Skills:", fullStack);

// // 2. Rest: Destructure
// const [first, second, ...others] = fullStack;
// console.log("First:", first);
// console.log("Second:", second);
// console.log("Others:", others);


//ALl about functions
//function declaration (it's hoisted)
// myName();
// function myName(){
//     console.log("Ahtesham");
// }


//function expression (it's not hoisted) function assigned to a variable
// const myName = function (){ 
//     console.log("Ahtesham");
// }
// myName();

//Arrow function
// const add = (a,b)=> a+b;
// console.log(add(2,3));

//Anonymous function (a function without a name)
// setTimeout(function(){
//     console.log("Hello after 3 seconds")},3000);

