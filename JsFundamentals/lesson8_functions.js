//Declarative function ( with the keyword function)
function myFunc(){
    console.log("Just a regular function")
}

myFunc() // It can be CALLED before/after declartion of the function

//Anoymous function ( But we must have to assign result to a variable)
let result = function(a){
    console.log("Hi ",a)
}

result("Ashik") // Must need to call after function initiation.

//ES6 arrow function ( Similar to annoynus)
let arrowFucn = (nameOfUser) => {
    console.log("Hello ",nameOfUser)
}

arrowFucn("Rabbani")

let multiMan = (x,y) => {
    return x**y;
}

console.log("Result ",multiMan(2,5))
