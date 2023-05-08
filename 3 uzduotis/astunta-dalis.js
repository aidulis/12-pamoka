window.onload = function() {
    
}

function trikampioPlotas (a, b, c) {
    return Math.sqrt(p * (p - a) * (p - b) * (p - c))
}

let a = prompt("Įveskite kraštinę a");
let b = prompt("Įveskite kraštinę b");
let c = prompt("Įveskite kraštinę c");
p = (+a + +b + +c) / 2;
console.log(Math.sqrt(p * (p - a) * (p - b) * (p - c)));