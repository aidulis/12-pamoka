window.onload = function() {
    
}

function apskritimoPlotas(r) {
    let apskritimoPlotas = Math.PI * (r ** 2) ;
    return apskritimoPlotas;
}
let r = prompt("Įveskite apskritimo spindulį");
console.log(apskritimoPlotas(r));