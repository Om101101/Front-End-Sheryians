// Accesing Elements 
//Selection eleemts 
/* document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector() */



let btn = document.querySelector("#btn");
btn.addEventListener("click",function(){
    btn.textContent="start ";
    btn.style.color="Red"
})
