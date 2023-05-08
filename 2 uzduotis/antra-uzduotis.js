window.onload = function() {
    function tarpaiTarpSkaiciu(sk1, sk2, sk3) {
        return [sk1, sk2, sk3].join(' ');
    }
    let sk1 = prompt("Įveskite sk1");
    let sk2 = prompt("Įveskite sk2");
    let sk3 = prompt("Įveskite sk3");
    alert([sk1, sk2, sk3].join(' '));

    function factorial(n) {
        //base case for 0!
        if (n == 0 || n == 1) {
            return 1;
            //recursion case
        } else {
            return n * factorial(n - 1);
        }
    }
    let n1 = 1;
    answer1 = factorial(n1);
    let n2 = 2;
    answer2 = factorial(n2);
    let n3 = 3;
    answer3 = factorial(n3);
    let n4 = 4;
    answer4 = factorial(n4);
    let n5 = 5;
    answer5 = factorial(n5);
    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(answer4);
    console.log(answer5);
    
    function skaiciuSumosModulis (a, b) {
        return Math.abs(a + b);
    }
    let a = -50;
    let b = 45;
    console.log(Math.abs(a) + Math.abs(b));

    function atsitiktinisSkaicius (x, y) {
        return Math.random() * (y - x) + x;
    }
    let x = 40;
    let y = 55;
    console.log(Math.random() * (y - x) + x);
}

    
