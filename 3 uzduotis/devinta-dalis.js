window.onload = function() {
    
}

function vektoriausIlgis(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Pirmo tasko koordinates

let x1 = 3;
let y1 = 4;

// Antro tasko koordinates

let x2 = 5;
let y2 = 6;
console.log(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));