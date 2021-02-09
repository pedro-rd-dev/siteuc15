function registrar() {

    var primeiraSenha = document.getElementById("primeiraSenha").value;
    var segundaSenha = document.getElementById("segundaSenha").value;
    var email = document.getElementById("email").value;

    var emailInvalido = document.getElementById("emailInvalido");
    var avisoSenhaRepetida = document.getElementById("senhaRepetida");


    if (primeiraSenha == segundaSenha) {
        console.log("senhas iguais")
        avisoSenhaRepetida.innerHTML = "";

    } else {
        console.log("senhas diferentes")
        avisoSenhaRepetida.innerHTML = "As senhas não coincidem!";
    }

    var retorno = validateEmail(email);

    if (!retorno) {
        emailInvalido.innerHTML = "Email invalido";
    } else {
        emailInvalido.innerHTML = "";

    }
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}