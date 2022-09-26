const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let numOfChar;

let input = document.querySelector(".input-text");
let submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function() {
    numOfChar = input.value;
})

let button = document.querySelector(".button");

let passwordOne = "";
let passwordTwo = "";

button.addEventListener("click", function() {
    for(let i = 0; i < numOfChar; i++) {
        let indexOne = Math.floor(Math.random() * characters.length);
        passwordOne += characters[indexOne];
    }
    document.querySelector(".left").textContent = passwordOne;
    
    for(let i = 0; i < numOfChar; i++) {
        let indexTwo = Math.floor(Math.random() * characters.length);
        passwordTwo += characters[indexTwo];
    }
    document.querySelector(".right").textContent = passwordTwo;
})





