window.onload = function() {
    
}

function trikampioIzambinesIlgioKvadratas(a, b) {
    let trikampioIzambinesIlgioKvadratas = (a*a) + (b*b);
    return trikampioIzambinesIlgioKvadratas;
}

let a = prompt("Įveskite statinį a");
let b = prompt("Įveskite statinį b");
trikampioIzambinesIlgioKvadratas = (Math.pow(a, 2) + Math.pow(b, 2));
console.log(trikampioIzambinesIlgioKvadratas);