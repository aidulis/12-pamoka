window.onload = function() {
    function dvigubasSkaicius(x) {
        return 2 * x - 10;
    }    
    let x = 15;
    let rezultatas = 2 * x - 10;
    console.log(rezultatas);

    function sandaugosIrSumosSantykis(a, b) {
        return sandauga/suma;
    }    
    let a = prompt("Įveskite skaičių a");
    let b = prompt("Įveskite skaičių b");
    sandauga = (+a * +b);
    suma = (+a + +b);
    rezultatas1 = sandauga/suma;
    console.log(rezultatas1);


    function patrigubintiZodi(zodis) {
        return (zodis.repeat(3));
    }    
    let zodis = "savaite ";
    console.log(zodis.repeat(3));

    function skaiciuSkaitinėSuma(c, d) {
        return c+d;
    }    
    let c = 25;
    let d = 37;
    rezultatas2 = '' + 25 + 37;
    console.log(rezultatas2);

    function priesingasSkaicius(y) {
        return -y;
    }    
    let y = prompt("Įveskite skaičių, kurio ženklą norite pakeisti")
    console.log(-y);
}