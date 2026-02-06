/* SetTimeOut
setTimeout(function () {
    console.log("Om Jaiswal")
}, 5000);

Set Interval Function
setInterval(function(){
    console.log("Yashu Jaiswal")
},1000)

If you want to stop the set interval Function
let st= setInterval(function(){
    console.log("Om Jaiswal ");
},1000)

clearInterval(st)

var count = 1;
const st = setInterval(function () {
  console.log(count);
  count++;

  if (count > 10) {
    clearInterval(st);
  }
}, 1000);

//Fetch API
//Random user api search in google
// https://randomuser.me/api/ put in search bar

fetch(`https://randomuser.me/api/`)
.then(raw=> console.log(raw))

fetch(`https://randomuser.me/api/`)
.then(raw=> raw.json())
.then(readlbledata=> console.log(readlbledata))

fetch(`https://randomuser.me/api/`)
.then(raw=> raw.json())
.then(readlbledata=> console.log(readlbledata.results[0].gender))

//Axios
// <script src="https://unpkg.com/axios@1.13.2/dist/axios.min.js"></script>
axios.get(`https://randomuser.me/api/`)
.then((raw) => console.log(raw.data));

// Promise
let parchi = new Promise(function (resolve, rejected) {
  fetch(`https://randomuser.me/api/`)
    .then((raw) => raw.json())
    .then((result) => {
      if (result.results[0].gender === "male") resolve();
      else rejected();
    });
});
parchi.then(function(){
    console.log("Green Button has pushed ")
})
.catch(function(){
    console.log("Red Button has pushed ")

});

//Callback
function abcd(a,b){
}
abcd(1, function (){})
function abcd(a,b){
    b()
}
abcd(1, function (){ console.log("call back hua hai ")})

// use of call back
function doSome(url,callback){
    fetch(`url`)
    .then(raw =>raw.json())
    .then(result =>{
        callback()
    })
}
doSome("some url", function(){

})
//User a data mago jab data ajye to us data ke name gender and email ko print karo
function getData(url, callback) {
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


// Async / await
async function abcd(){
   let a = await fetch (`https://randomuser.me/api/`);
   a= await a.json();
    console.log(a);
}
abcd();

// Ek url se data lekar aao and usey console par show  karo

//sloving this problem uisng callback
function dataFetch(url, callback) {
  fetch(url)
    .then((raw) => raw.json())
    .then(result => {
      callback(result);
    });
}
dataFetch("https://randomuser.me/api/", function (result) {
  console.log(result);
});

//Promise
function dataFetch(url) {
  let parchi = new Promise(function (resolve, rejected) {
    fetch(url)
      .then((raw) => raw.json())
      .then((result) => {
        resolve(result);
      });
  });
  return parchi;
}
dataFetch("https://randomuser.me/api/").then(function (result) {
  console.log(result);
});

//Async /
async function dataFetch(url) {
  let data = await fetch(url);
  let res = await data.json();
  return res;
}
async function hh() {
 const data = await dataFetch("https://randomuser.me/api/");
 console.log(data)
}
hh()

//Genrators

function* printNums() {
  console.log("Started");
  yield 1;
  console.log("First Start ");
  yield 2;
  console.log(" Second Start ");
  yield 3;
 
}
const ans = printNums();
console.log( ans.next().value)
console.log( ans.next().value)
console.log( ans.next().value)
console.log( ans.next().value)
console.log( ans.next())



function* allNum() {
  for (let i = 1; i < 11; i++) {
    yield i;
  }
}
const gen = allNum();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(gen.next().value);



// Web Worker
// new Worker('worker.js')
var nums =Array.from({length:100}, (_,b)=>b+1)
new Worker("worker.js");
Worker.postMessage(nums)
Worker.onmessage=function(data){
  console.log(data)
}

// accept the second data in new file 
onmessage = function(data){
   const ans = data.data.reduce ((acc,item)=>item+acc,0);
} */