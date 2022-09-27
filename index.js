const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const letters_symbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const letters_numbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let numOfChar;

let input = document.querySelector(".input-text");

let toggle1 = document.getElementById("myToggle-1");
let toggle2 = document.getElementById("myToggle-2");

let submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function() {
    numOfChar = input.value;
})

let button = document.querySelector(".button");

let passwordOne = "";
let passwordTwo = "";

button.addEventListener("click", function() {
    if (toggle1.checked === true && toggle2.checked === true) {
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

    } else if(toggle1.checked === false && toggle2.checked === false) {
        for(let i = 0; i < numOfChar; i++) {
            let indexOne = Math.floor(Math.random() * letters.length);
            passwordOne += letters[indexOne];
        }
        document.querySelector(".left").textContent = passwordOne;

        for(let i = 0; i < numOfChar; i++) {
            let indexTwo = Math.floor(Math.random() * letters.length);
            passwordTwo += letters[indexTwo];
        }
        document.querySelector(".right").textContent = passwordTwo;

    } else if(toggle1.checked === true && toggle2.checked === false) {
        for(let i = 0; i < numOfChar; i++) {
            let indexOne = Math.floor(Math.random() * letters_numbers.length);
            passwordOne += letters_numbers[indexOne];
        }
        document.querySelector(".left").textContent = passwordOne;

        for(let i = 0; i < numOfChar; i++) {
            let indexTwo = Math.floor(Math.random() * letters_numbers.length);
            passwordTwo += letters_numbers[indexTwo];
        }
        document.querySelector(".right").textContent = passwordTwo;

    } else if(toggle1.checked === false && toggle2.checked === true) {
        for(let i = 0; i < numOfChar; i++) {
            let indexOne = Math.floor(Math.random() * letters_symbols.length);
            passwordOne += letters_symbols[indexOne];
        }
        document.querySelector(".left").textContent = passwordOne;

        for(let i = 0; i < numOfChar; i++) {
            let indexTwo = Math.floor(Math.random() * letters_symbols.length);
            passwordTwo += letters_symbols[indexTwo];
        }
        document.querySelector(".right").textContent = passwordTwo;
    }
    
})






