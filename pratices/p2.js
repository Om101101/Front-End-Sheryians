//Select a <h1> element and change its text to "Welcome User".
/* let he= document.querySelector("h1");
he.textContent="Wellcome the user"; */

// Select a paragraph using getElementById and change its text color to blue.
/* let p = document.getElementById("para");
console.log(p);
p.style.color = " red"; */
// Select all <li> elements using querySelectorAll and log them.
/* let l = document.querySelectorAll("li");
for (let i = 0; i < l.length; i++) {
  console.log(l[i].textContent);
} */
// Select the first button on the page and disable it.
/* let btn = document.querySelector("button");
btn.disabled = true; */
// Select an input field and set its placeholder to "Enter your name".
/* let inp= document.querySelector("input");
inp.setAttribute("placeholder","Enter your name") */

// Select a div with class .box and change its background color
// let di = document.querySelector(".div");
// di.style.background = "blue";
/* let imge = document.querySelectorAll("img");
console.log(imge.length); */
// let a = document.querySelector("a");
// a.setAttribute(
//   "href",
//   "https://chatgpt.com/c/69662894-ba90-8324-9ed0-585130a34912"
// );
// console.log(a);
// Select all elements with class .item and add a border.
/* const items = document.querySelectorAll(".item");

for (let i = 0; i < items.length; i++) {
  items[i].style.border = "2px solid black";
} */
// Add a click event on a button that logs "Button clicked".
/* let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log("button has been clicked");
}); */
/* let h = document.querySelector("h2");
console.log(h);
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  h.textContent = " Text has been chng";
}); */
// On input change, log the value typed by the user.
/* let inp = document.querySelector("input");
// let btn = document.querySelector("btn");

inp.addEventListener("input", function () {
  console.log(inp.value);
}); */

// On mouse hover over a div, change its background color.
/* let di = document.querySelector("div");
di.addEventListener("mouseover", function () {
  di.style.backgroundColor = "lightblue";
}); */
/* let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert("button clicked");
}); */
// On double click, hide a paragraph.
/* let par = document.querySelector("p");
par.addEventListener("dblclick", function () {
  par.style.display = "none";
}); */
// When page loads, log "Page Loaded".
// window.addEventListener("load", function () {
//   console.log("Page Loaded");
// });
// Add a click event to a paragraph and change its font size.
/* let par = document.querySelector("p");
par.addEventListener("click", () => {
  par.style.fontSize = "50px";
}); */
// Add a keypress event and log the pressed key.

/* window.addEventListener("keypress", () => {
  console.log("key has presseds");
}); */
/* let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.textContent = "off hai";
}); */
// When user types in input, show the text live inside a <span>.
/* let inp = document.querySelector("input");
let sp = document.querySelector("#output");
inp.addEventListener("input", function (dets) {
  sp.textContent = inp.value;
}); */
/* let ul = document.querySelector("ul");
ul.addEventListener("click", function () {
  ul.style.color = "green";
}); */
/* let li = document.querySelector("ul");
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let lis = document.createElement("li");
  lis.textContent = "New items";
  li.appendChild(lis);
}); */
