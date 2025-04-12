// Destructuring  means extracting(unpacking) the data from objects and arrays and assigning them to new variables
// We use it for api fetching
//This is an object
// const studentData = {
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
 const obj = {
    a : 7,
    b : 8
};
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