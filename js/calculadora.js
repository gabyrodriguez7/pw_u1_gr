const SUMA = '+';
const RESTA = '-';
const MULTIPLICACION = '*';
const DIVISION = '/';
function sumar(numero1, numero2) {
    return numero1 + numero2;
}
function restar(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
function dividir(numero1, numero2) {
    return numero1 / numero2;
}

function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_numero_1').value);
    let num2 = parseFloat(document.getElementById('id_numero_2').value);

    let resultado = 0;

    if (tipo === SUMA) {
        resultado = sumar(num1, num2);
    }
    if (tipo === RESTA) {
        resultado = restar(num1, num2);
    }
    if (tipo === MULTIPLICACION) {
        resultado = multiplicar(num1, num2);
    }
    if (tipo === DIVISION) {
        resultado = dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText = document.getElementById('id_resultado').innerText + resultado.toString();

}

const fundamentos = () => {
    console.log('Fundamentos JS');
    /*Tipos de variables
    var   : Ya esta quedando obsoleto
    let   : Para variables cambiantes
    const : Para variables constantes
    Soportan cualquier tipo de Dato*/
    let nombre = '10';
    let numero = 10;
    let areglo = [1, 2, 3, 4, 5];

    const nombrec = '10';
    console.log(areglo);
    console.log('Texto de prueba');

    /*Arreglos */
    const diasLaborables = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    console.log(diasLaborables);
    console.log(diasLaborables[0]);

    console.log(diasLaborables[10]);
    let valor = '';
    console.log(valor);
    /* Para agregar al final */
    diasLaborables.push('Sabado');
    /* Para agregar al inicio */
    diasLaborables.unshift('Dias: ');
    console.log(diasLaborables);

    const numerosImpares = [1, 3, 6, 7, 9];
    const numerosPares = [2, 4, 6, 8];
    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);

    /*Sentencias de control */
    for (const dia of diasLaborables) {
        console.log(dia);
        if (dia === 'Viernes') {
            console.log('Por fin viernes');

        } else {
            console.log('Aun no es viernes')
        }

        if (dia !== 'Viernes') {
            console.log('Dia normal');

        } else {
            console.log('Dia de salida')
        }
    }
    /*Manejo de objetos */
    const miProfesor = {
        Nombre: 'Gabriela',
        Apellido: 'Rodriguez',
        Edad: 25,
        Genero: 'Femenino',
        Ciudad: 'Quito'
    }
    console.log(miProfesor);
    console.log(miProfesor.Nombre);

    /*Seteo de atributos*/
    miProfesor.Apellido ='Contreras';
    console.log(miProfesor);
    if(miProfesor.Ciudad === 'Quito'){
        console.log('Es de la Capital');
    }
    const estudiante1 = {
        Nombre: 'Juan',
        Apellido: 'Perez',
        Edad: 25,
        Genero: 'Masculino',
        Ciudad: 'Loja'
    }
    const estudiante2 = {
        Nombre: 'Lupita',
        Apellido: 'Torres',
        Edad: 25,
        Genero: 'Femenino',
        Ciudad: 'Quito'
    }
    const estudiante3 = {
        Nombre: 'Sebastian',
        Apellido: 'Cruz',
        Edad: 25,
        Genero: 'MAsculino',
        Ciudad: 'Quito'
    }
    const estudiantes = [estudiante1, estudiante2, estudiante3];

    console.log(estudiantes);
    console.table(estudiantes);
}