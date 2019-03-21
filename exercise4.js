'use strict'

const conversion = function(fahrenheit) {
    return ((5 / 9) * (fahrenheit - 32))
}

const celcius_bp = conversion(212)
console.log(celcius_bp)

const celcius_fp = conversion(32)
console.log(celcius_fp)