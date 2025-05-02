let num1 = 0;  
let num2 = 0; 
let esSegundo = "0";  


function mostrarEnDisplay(valor) {
    let elementoDisplay = document.getElementById('id_display');
    elementoDisplay.innerText += valor;  

    if(valor !== "+"){
        
    }

}

function operacionSuma(){
esSegundo = "1";
}

function concatenarNum () {
    if(esSegundo === "0"){
        num1 = num1 + numero;

    }else{
        num2 = num2 + numero;
    }
}
 function sumar(){
    let numPrimero = parseFloat(num1);
    let numSegundo = parseFloat(num2);
    let elemntoDisply = document.getElementById('id_display');
    elemntoDisply.innerText = numPrimero + num2;
 }