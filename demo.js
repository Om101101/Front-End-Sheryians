// Text Content access: inner Text, Text content , inner HTML

/* let h1 = document.querySelector("h1");
h1.innerHTML ="<i> Yashu jaiswal</i>";
console.dir(h1) */

// YE PROGRAM HAI JS KA JO KI KEYBORD KEYS KO WEBSITE WINDOW MEIN DELHTA HAI KI HUMNE KON SI KEY PRESS KI HAI
/* let h1 = document.querySelector("h1");
window.addEventListener("keydown", function (dets) {
  if (dets.key === " ") {
    h1.textContent = "SPC";
  } else {
    h1.textContent = dets.key;
  }
}); */

// YE PROGRAM BUTTON DESIGN KARTA HAI JO EK FILE INPT KARTA HAI WITH FILE NAME YE EK CUSTON IPUT BUTTON HAI JO CSS JS BANYA GAYA HAI
/* let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");
btn.addEventListener("click", function () {
  fileinp.click();
});

fileinp.addEventListener("change", function (dets) {
  const file = dets.target.files[0];
  if (file) {
    btn.textContent = file.name;
  }
}); */



// HUMNE SUBMIT EVENT SE EK REAL DATA CARD BAAN RAHE RHA 
/* 
let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let main = document.querySelector("#main");
form.addEventListener("submit", function (dets) {
  dets.preventDefault();
  let card = document.createElement("div");
  card.classList.add("card");
  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img");
  img.setAttribute("src", input[0].value);
  let h3 = document.createElement("h3");
  h3.textContent = input[1].value;
  let h5 = document.createElement("h5");
  h5.textContent = input[2].value;
  let p = document.createElement("p");
  p.textContent = input[3].value;

  profile.appendChild(img);
  card.appendChild(profile);
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);

  main.appendChild(card);

  input.forEach(function(inp){
    if (inp.type !=="submit"){

      inp.value="";
    }
  });
  
}); */
