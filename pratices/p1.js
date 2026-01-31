/* //Print numbers 1 to 10 as daily task list.
for (let i = 1; i < 11; i++) {
  console.log(i);
} */
//Print all even numbers 1–50
/* for (let i = 1; i < 51; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
} */
/* //Print all odd numbers 1–50
for (let i = 1; i < 51; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
} */
//Write a program  print 1 to 100 number if 1 is odd then ticikit number and evenshop coupn number
/* for (let i = 1; i < 101; i++) {
  if (i % 2 === 0) {
    console.log(`${i} Ticket Number`);
  } else {
    console.log(`${i} Shop coupan number`);
  }
} */
// console.log(`5 x ${i}= ${i*5}`)

//Display table of a number entered by user.
/* let a = prompt("Enter a number");
for (i = 1; i < 11; i++) {
  console.log(`${i} x ${i}=${i * a}`);
} */
// Print numbers 10 to 1 (countdown timer).

/* for (i=10; i>0; i--){
    console.log(i)
} */

// Print each character of a username.
/* let val = prompt(" Enter a username");
for (let i = 0; i < val.length; i++) {
  console.log(i,val[i]);
} */
// // Count total characters in a password.
// let pass = prompt("Enetr  your password");
// for (i = 0; i < pass.length; i++);
// console.log(i);

// Print all months of a year from an array.
/* let a =['Jan', 'Feb','March','Apirl',];
for (i =0; i<a.length;i++){
    console.log(i)
} */
// Print prices of all products in cart.

/* let cartPrice =[500,600,700];
for (let i =0; i<cartPrice.length; i++){
    console.log(cartPrice[i]);
} */
/* let i=1
while (i<16){
    if( i%2===1){
        console.log(i)
    }
    i++
} */
//Count how many numbers are greater than 50 in an array (marks).
/* let marks =[34,67,89,23,45,90,56,78];
let count=0;
for (let i =0; i<marks.length;i++){
    if(marks[i]>50){
        count++
    }
}
console.log("Numbers greater than 50:", count); */
//Calculate total bill amount from a cart prices array.
/* let bill = [101, 200, 500, 45, 60];
let total = 0;
for (let i =0; i<bill.length;i++){
   total += bill[i];
}
console.log("Total bill amount :", total) */

/* function sum(a=0, b=0){
return a+b;
}
console.log(sum(4,4)) */

/* function oe( a){
  if(a%2===0) return" Even";
  return "odd"
}
console.log(oe(56)); */
/*  let str = prompt("Enetr a string");
function ab(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++){
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log("total number :", ab(str)); 
 */
/* let a = Number(prompt("Enter a number"));
function marks(a) {
  if (a >= 90) return "A";
  if (a >= 75) return "B";
  if (a >= 50) return "C";
  return "Fail";
}
console.log(marks(a)); */

/* let h1 = document.querySelector("#h1");
h1.innerHTML="<i>Jaiswal</i>";
console.dir(h1) */
/* let h12 = document.createElement("h1");
h12.textContent = " kya hal hai mere bhai ";
console.log(h1);
document.body.append(h12); */
/* const h1 = document.createElement("h1");
h1.textContent = "Om Jaiswal";
document.body.appendChild(h1); */
/* 
let h1 = document.createElement("h1");
console.log(h1);
h1.textContent=" om jiaswla";
document.querySelector("body").append(h1); */
