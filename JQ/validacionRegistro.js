$(document).ready(function () {//espera a que se carge todo el DOM

    $("#formRegistro").submit(function (e) {
       e.preventDefault(); // Evita enviar el formulario si hay errores

        let errores = [];

        let usuario = $("#usuario").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();
        let password2 = $("#password2").val().trim();

        if (usuario.length < 3) {
            errores.push("El nombre debe tener al menos 3 caracteres.");
        }

        if (!email.includes("@") ) {
            errores.push("El email debe contener un símbolo @.");
        }
        if ( !email.includes(".")){
            errores.push("El email debe contener un símbolo punto .");
        }
        if (!email.includes("@") && !email.includes(".") ) {
            errores.push("El email debe contener un símbolo punto . y un símbolo @.");
        }
        if (password.length < 6) {
            errores.push("La contraseña debe tener al menos 6 caracteres.");
        }

        if (password !== password2) {
            errores.push("Las contraseñas no coinciden.");
        }

        if (errores.length > 0) {
            $("#errores").html(errores.join("<br>"));
        } else {
            $("#errores").html("");
            alert("Registro completado");
            
        }
    });

});
