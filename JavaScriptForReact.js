// Destructuring  means extracting(unpacking) the data from objects and arrays and assigning them to new variables
// We use it for api fetching
//This is an object
// let studentData = {
//     name: "Ahtesham",
//     degree : "MS Computer Science",
//     graduation : 2025,
//     skills: ["Mern Stack", "AI Expert"],
//     education: {
//         matric: "Science",
//         inter: "Engineering"
//     },
//     isStudent: false,
//     absents : 0,
//     hobbies: function (hobby){
//         //printing by loop
//         for(const key in hobby){ //it's an object so 'for in loop' is used
//             console.log(`${key} : ${hobby[key]}`);
//         }
//     }
// }

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



//Short circuiting using AND operator(if first value is false then it will not check next values but print it)
// a = "apple";
// b = "book";
// result = a && b; //if a is true it will print b
// console.log(result);

// a = 0; //it's falsy value so it will print a
// b = "book";
// result = a && b; 
// console.log(result);

// let result1 = true && callMe();
// console.log(result1);
// function callMe(){
//     console.log("Hello");
// } 

// console.log(true && "I will be printed");
// console.log(false && "I'll not be printed");


//in AND if first value is falsy value then it will not evaluate next,
// const {isStudent} = studentData; //falsy value
// console.log(isStudent);
// console.log("He is student here" && isStudent )
// console.log(isStudent && "He is student here")

// //in OR if first value is truthy value then it will not evaluate next,
// console.log("He is student here" || isStudent )
// console.log(isStudent || "He is student here")

// console.log(true || "I will be printed");
// console.log(false || "I'll not be printed");


//Nullish coalescing(??) ES2020
//it's similar to OR operator but does not short circuit for all falsy values
//it provides default value if null or undefined
// let value1 = null;
// let value2 = "No input is given";
// let result = value1 ?? value2;
// console.log(result);
//1. If value1 is not null/undefined, it returns value1.
//2. If value1 is null/undefined, it returns value2



// //Optional Chaining (?.)
// //Optional chaining lets you safely access nested object properties without having to manually check if each level exists.

// //If the value before ?. is null or undefined, JavaScript stops and returns undefined — instead of throwing an error like "Cannot read property 'x' of undefined"
// // let user = {
// //     profile: {
// //       name: "Ali"
// //     }
// //   };
  
// //   console.log(user.profile?.name); // Ali
// //   console.log(user.contact?.email); // undefined (safe)
  

// //Ternary operator or conditional operator
// //1. condition, 2. true and 3. false
// // const age = 24;
// // age>=18 ? console.log("You are eligible") : console.log("You are not eligible");

// // //Ternary Operator is an expression
// // const drive = age>18? "eligible":"Not eligible"
// // console.log(drive);

// // //ternary operator can be used inside template literals
// // console.log(`I am ${age>18? "":"not"} eligble to vote`)

// //map, filter and reduce methods
// //map Method (creates another array, doesn't change the original array) 
// // Ex # 01
// const teachers = ["Dora", "Moana", "Plato"]
// newTeachers = teachers.map((x)=>{
//     return x + " student";
// });
// console.log(teachers);
// console.log(newTeachers);
// //Ex # 02
// const numbers = [1,2,3,4,5];
// const squared = numbers.map((x)=> x*x);
// console.log(numbers);
// console.log(squared);


// //map with objects
// const students = [
//     { id: 1, name: "Ali", score: 85 },
//     { id: 2, name: "Sara", score: 42 },
//     { id: 3, name: "Usman", score: 74 },
//     { id: 4, name: "Ahsan", score: 90 },
//   ];
//   //taking only array of names
//   const arrayOfNames = students.map((student)=>student.name);
//   console.log(arrayOfNames);
//   //Adding a new property to each object e.g: passed/failed
//   const updateStudents = students.map((student)=> ({
//     ...student,
//     result: student.score>=50?"Pass":"Fail"
//   }));
//   console.log(updateStudents);

  