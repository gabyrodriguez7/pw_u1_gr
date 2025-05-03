let num1 = 0;
let num2 = 0;
let resultado = 0;


function mostrarEnDisplay(valor) {
    let elementoDisplay = document.getElementById('id_display');
    elementoDisplay.innerText += valor;
    console.log("Valor mostrado en display: " + elementoDisplay.innerText);
    textoCompleto = elementoDisplay.innerText;

    for (let numero of textoCompleto) {
        if (numero === "+") {
            num1 = parseFloat( textoCompleto.substring(0, textoCompleto.indexOf(numero)));
            num2 = parseFloat(textoCompleto.substring(textoCompleto.indexOf(numero) + 1, textoCompleto.length));
        }
    }
}

function suma() {
    textoCompleto = document.getElementById('id_display').innerText = num1 + num2;
}

function borrar(){
    textoCompleto = document.getElementById('id_display').innerText = "";

}