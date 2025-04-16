//data fetching through api and printing promise that is fetched from api
// let url = "https://catfact.ninja/facts";
// let promise = fetch(url);
// console.log(promise); //just returns a promise not the actual data

//using async await
// let url = "https://catfact.ninja/facts";
// const getFacts = async ()=> {
//     console.log("Fetching data ....");
//     let response = await fetch(url)
//     console.log(response) //shows headers, status still not the actual facts
// }
// getFacts();


//fetch and then() chaining
// fetch("https://catfact.ninja/facts")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error("Error:", err));


// Fetch + Async/Await + actual data
let url = "https://catfact.ninja/facts";
const getFacts = async()=>{
    console.log("Fetching data ....");
    try{
        let response = await fetch(url);
        data = await response.json(); // convert to json
        console.log(data);  //actual data facts
        //printing all facts
        for(let fact of data.data){
            console.log(fact);
        }
    }
 catch (err){
    console.log("Error fetching data:", err)
}
}
getFacts();