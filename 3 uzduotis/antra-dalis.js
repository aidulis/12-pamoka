window.onload = function() {
    
}

function pavirsiausPlotas(a, b, c) {
    let pavirsiausPlotas = (+(a * b) + +(a * c) + +(b * c) + +(a * b) + +(a * c) + +(b * c));
    return pavirsiausPlotas;
}
let a = prompt("Įveskite ilgį");
let b = prompt("Įveskite plotį");
let c = prompt("Įveskite aukštį");
console.log(pavirsiausPlotas(a, b, c));