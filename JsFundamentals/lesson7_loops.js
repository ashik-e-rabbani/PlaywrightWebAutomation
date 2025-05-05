for (var i = 0; i<5;i++){
    console.log(i)
}

console.log(i) // as we declare i as var so its has scope outside loop

for (let j = 0; j<5;j++){
    console.log(j)
}

// console.log(j) // will throw error

let cars = ['a','b','c']

for (car of cars){
    console.log(car)
}

// ES6 syntax

cars.forEach(car => {
    console.log(car)
})

