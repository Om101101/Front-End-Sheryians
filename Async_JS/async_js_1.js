//SetTimeOut
// setTimeout(function () {
//     console.log("Om Jaiswal")
// }, 5000);

//Set Interval Function
// setInterval(function(){
//     console.log("Yashu Jaiswal")
// },1000)

// If you want to stop the set interval Function
// let st= setInterval(function(){
//     console.log("Om Jaiswal ");
// },1000)

// clearInterval(st)

// var count = 1;
// const st = setInterval(function () {
//   console.log(count);
//   count++;

//   if (count > 10) {
//     clearInterval(st);
//   }
// }, 1000);

//Fetch API
//Random user api search in google
// https://randomuser.me/api/ put in search bar

// fetch(`https://randomuser.me/api/`)
// .then(raw=> console.log(raw))

// fetch(`https://randomuser.me/api/`)
// .then(raw=> raw.json())
// .then(readlbledata=> console.log(readlbledata))

// fetch(`https://randomuser.me/api/`)
// .then(raw=> raw.json())
// .then(readlbledata=> console.log(readlbledata.results[0].gender))

//Axios
// <script src="https://unpkg.com/axios@1.13.2/dist/axios.min.js"></script>
// axios.get(`https://randomuser.me/api/`)
// .then((raw) => console.log(raw.data));

// Promise
// let parchi = new Promise(function (resolve, rejected) {
//   fetch(`https://randomuser.me/api/`)
//     .then((raw) => raw.json())
//     .then((result) => {
//       if (result.results[0].gender === "male") resolve();
//       else rejected();
//     });
// });
// parchi.then(function(){
//     console.log("Green Button has pushed ")
// })
// .catch(function(){
//     console.log("Red Button has pushed ")

// });

//Callback
/* function abcd(a,b){
}
abcd(1, function (){}) */
/* function abcd(a,b){
    b()
}
abcd(1, function (){ console.log("call back hua hai ")}) */

// use of call back
/* function doSome(url,callback){
    fetch(`url`)
    .then(raw =>raw.json())
    .then(result =>{
        callback()
    })
}
doSome("some url", function(){

}) */
//User a data mago jab data ajye to us data ke name gender and email ko print karo
/* function getData(url, callback) {
  fetch(url)
    .then((raw) => raw.json())
    .then((result) => {
      callback(result);
    });
}
getData("https://randomuser.me/api/", function (result) {
  console.log(
    result.results[0].gender,
    result.results[0].email,
    result.results[0].name.first,
  );
});
 */




// Async / await
