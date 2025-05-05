//Objects

var customer = {
    userName: "Ashik",
    age:30
}
console.log(customer)
console.log(`Customer full object ${customer.age}`) //Interpolation doesn't print whole object but prints value
console.log(customer['userName'])                   //printing with bracket notation
customer.userName = "Rabbani"                       //updating value
console.log(customer['userName'])


var cars = ['Audi','BMW', 'Toyota', 1099]

console.log("Cars --> ", cars)
console.log("First Car --> ", cars[0])

cars[1] = "Jaguar"

console.log("Cars --> ", cars)
console.log("Second Car --> ", cars[1])

//Combination of Objects and array
var newCustomer = {
    userName: "Ashik",
    age:30,
    cars: ['Audi','BYD']
}

console.log("New customer --> ", newCustomer)
console.log("New customer cars --> ", newCustomer.cars)
console.log("New customer 1st car --> ", newCustomer.cars[0])