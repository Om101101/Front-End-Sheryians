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


var count =1;
const st = setInterval(function(){
    count++;
    console.log("Om ")
    if(count===10) clearInterval(st)
},1000)

//Fetch API