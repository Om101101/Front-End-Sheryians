// Making Timer

let str = document.querySelector("#str")
let stp = document.querySelector("#stp")
let h= document.querySelector("h3")
var  inter;
str.addEventListener("click",function(){
var count=0;
 inter = setInterval(function(){
h.textContent=count;
    count++
},1000)
});
stp.addEventListener("click",function(){
    clearInterval(inter)
})

//Cng content of tab
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");

btn1.addEventListener("click", function () {
  removetxt();
  a1.style.display = "block ";
  a1.style.width = "70% ";
});
btn2.addEventListener("click", function () {
  removetxt();
  a2.style.display = "block ";
  a2.style.width = "70% ";
});
btn3.addEventListener("click", function () {
  removetxt();
  a3.style.display = "block ";
  a3.style.width = "70% ";
});
btn4.addEventListener("click", function () {
  removetxt();
  a4.style.display = "block ";
  a4.style.width = "70% ";
});

function removetxt() {
   document.querySelectorAll("h3").forEach(function (h3) {
    h3.style.display = "none";
  });
}

const buttons = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".content");

function removeTxt() {
  contents.forEach((item) => {
    item.style.display = "none";
  });
}

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    removeTxt();
    contents[index].style.display = "block";
    contents[index].style.width = "70%";
  });
});
