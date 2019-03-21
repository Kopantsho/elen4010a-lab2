'use strict'

let initial_array = [1, 4, 6, 7]
let newArray = []

let squares = function(array) {

    array.forEach(function(element) {
        element *= element
        newArray.push(element)
    })
}

const myMap = function(functionToApply, array) {
    functionToApply(array)
}

myMap(squares, initial_array)

const map1 = initial_array.map(x => x * x)

console.log(newArray)
    //console.log(initial_array)
console.log(map1)



//ask Conrad about passing arrays into functions
//why does it not update the actual array