// variables and conditions
let userName = "Itz Myke";
let age = 25;

if (age >= 18) {
    console.log("you are above 18")
} else {
    console.log("you are below 18")
}

// functions
function greetme(){
    console.log("Hello " + userName);
}
greetme();

// loops
let fruits = ["apple", "banana", "cherry"]; 
for(let i = 0; i < 5; i++){
    console.log("fruit number " + (i+1) + ": " + fruits[i % fruits.length]);
}
let count = 10;
while (count > 0){
    console.log("countdown: " + count);
    count--;
}

// DOM manipulation
document.getElementById("output").innerText = "Hey there!";
document.getElementById("button").innerText = "click me";
document.getElementById("button").style.backgroundColor = "lightblue";
 
document.getElementById("button").addEventListener("click", function() {
    document.getElementById("output").innerText = "A work of art!";});

