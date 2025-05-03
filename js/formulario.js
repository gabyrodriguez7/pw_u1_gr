function guardar() {
    validar();
}

function validar() {
    let nombre = document.getElementById("id_nombre").value;
    let apellido = document.getElementById("id_apellido").value;
    let fechaDeNacimiento = document.getElementById("id_fecha_nacimiento").value;
    let email = document.getElementById("id_email").value;
    let password = document.getElementById("id_password").value;

    if (nombre == "") {
        console.log("Error no ha ingresado el nombre");
    } else{
        console.log("Paso validacion del nombre");
    }
    
    if (apellido == "") {
        console.log("Error no ha ingresado el apellido");
    } else{
        console.log("Paso validacion del apellido");
    }
    
    if (fechaDeNacimiento == "") {
        console.log("Error no ha ingresado el fecha de nacimiento");
    } else{
        console.log("Paso validacion del fecha de nacimiento");
    }
    
    if (email == "") {
        console.log("Error no ha ingresado el email");
    } else{
        console.log("Paso validacion del email");
    }
    
    if (password == "") {
        console.log("Error no ha ingresado el password");
    } else{
        console.log("Paso validacion del password");
    }
}
