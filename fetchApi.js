//data fetching through api and printing promise that is fetched from api
// let url = "https://catfact.ninja/facts";
// let promise = fetch(url);
// console.log(promise);

//using async await
let url = "https://catfact.ninja/facts";
const getFacts = async ()=> {
    console.log("Fetching data ....");
    let response = await fetch(url)
    console.log(response)
}
getFacts();
