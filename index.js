//Calculator Program
//User se 2 number aur ek operator (+,-,*,/) lo aur switch case se result print karo
/* let num1 = Number(prompt("Enter First Number"));
let num2 = Number(prompt("Enter Second Number"));
let operator = prompt("Enter the operator(+,-,*,/)");
let result;
switch (operator) {
  case "+":
    result = num1 + num2;
    console.log("Result=", result);
    break;
  case "-":
    result = num1 - num2;
    console.log("Result=", result);
    break;
  case "*":
    result = num1 * num2;
    console.log("Result=", result);
    break;
  case "/":
    if (num2 !== 0) {
      result = num1 / num2;
      console.log("Result= ", result);
    } else {
      console.log("Error: Division by zero is not allowed ");
    }
    break;
  default:
    console.log("Invaid Operator");
}
 */
// Day Finder Number (1-7) input lo aur usko day print karo
/* let dayNumber = Number(prompt("Enter a number between 1 to 7"));
switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thurday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Error : Select the number 0-7 range only ");
} */
//Traffic Signal System

/* let traffic = prompt("Enter the Colour of the traffic Red/ Green/ Yellow");
switch (traffic) {
  case "Red":
    console.log("Stop");
    break;
  case "Green":
    console.log("Go");
    break;
  case "Yellow":
    console.log("Ready");
    break;
  default:
    console.log("Error unkonw color you have selected ");
} */
// Menu Based Food Odering System
/* let num= Number(prompt("Enter the Number 0-4"));
switch(num){
    case 1:
        console.log("Pizza");
        console.log("500");
        break;
    case 2:
        console.log("Pasta");
        console.log("540");
        break;
    case 3:
        console.log("Sandwitch");
        console.log("40");
        break;
    case 4:
        console.log("Hot Dog");
        console.log("540");
        break;
    default:
        console.log("Error: Select Number 0-4")

} */
// Early Return Pattern
//Positive Number Check agar number negative ho to immediately return karo .
/* function checkPositiveNumber(num) {
  if (num < 0) {
    console.log("Number is Negative");
    return;
  }
  console.log("Number is Positive");
}
checkPositiveNumber(-55);
checkPositiveNumber(15); */

//Login Validation

/* function Username(nam) {
  if (!nam) {
    console.log("User  name is required");
    return;
  }
  console.log("User name is valid");
}
Username("Om Jaiswal");
Username(); */

//Age Validation
/* function age(num) {
  if (num >=18) {
    console.log("Age is valid");
    return;
  }
  console.log("NOt valid");
}
age(55);
age(18);
age(10);
age(16);
age(19); */
/* function pass(password) {
  if (!password || password.length < 8) {
    console.log("Password length must be at least 8 characters");
    return;
  }

  console.log("Password length is ok");
}

pass("12345678");
pass("4125");
pass("74108852963"); */


/* for (i=1; i<101; i++){
    console.log(i)
} */


/// using for loop 
// Print number from 1 to 100 using a for loop 
/* for (i=1; i<101; i++){
    console.log(i)
}
 */

//Print number from 10 to 1 using while loop

/* let i=10
while (i>0){
    console.log(i);
    i--
} */


// Print even nuumber from 1 to 20 using loop

/* for(i=1; i<21;i++){
   if(i%2===0){
    console.log(i)
   }

} */

//Print odd number 1 to 15 using while loop 
/* let i=1
while (i<16){
    if( i%2===1){
        console.log(i)
    }
    i++
} */

//Print the multiple table of 5 (i.e 5x1=5.....)
/* for (i=1; i<11;i++){
    console.log(`5 x ${i}= ${i*5}`)
} */
// Find the sum of 1 to 100 using a loop 
/* let sum = 0;
for (let i=1; i<101; i++){
    sum = sum +i;
}
console.log(sum) */

// Print all number btw 1 to 50 that are divide by 3

/* for (let i=1; i<51; i++){
    if(i%3===0){
        console.log(i)
    }
} */
// Ask the User for a number and print wheather each number from 1 to that number is odd or even ex- 1 is odd 2 is even
/* let val=prompt("Enter a number :");
for ( let i=1; i<=val; i++){
    if(i%2===0){
        console.log(`${i} is a even number `)
    }
    else{
        console.log(`${i} is odd number `)
    }
} */



// Stop at first multiple of 7
// Write a loop from 1 to 100 that
//Print each number 
//stop complete when it find the first number divible by 7
/* for (let i=1; i<101; i++){
    console.log(i)
    if(i%7===0){
        break;
    }
} */





//Skip multiple of 3
//Write a loop from 1 to 20 
//skip number divide by 3 
//print all other     
/* for (let i=1; i<21; i++){
    if (i%3===0) continue
    console.log(i)
} */



// Function 
//Write a Prgram a BMI Calculator
