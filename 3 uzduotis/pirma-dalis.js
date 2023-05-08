window.onload = function() {
    
}

function staciakampioPerimetras(a, b) {
    let perimetras = 2* a + 2* b;
    return perimetras;
}
let a = prompt("Įveskite staciakampio ilgį");
let b = prompt("Įveskite staciakampio plotį");
console.log(staciakampioPerimetras(a, b));