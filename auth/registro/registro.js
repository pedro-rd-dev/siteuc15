function registrar() {

    var primeiraSenha = document.getElementById("primeiraSenha").value;
    var segundaSenha = document.getElementById("segundaSenha").value;
    var email = document.getElementById("email").value;

    var emailInvalido = document.getElementById("emailInvalido");
    var avisoSenhaRepetida = document.getElementById("senhaRepetida");


    if (primeiraSenha == segundaSenha) {
        console.log("senhas iguais")
        avisoSenhaRepetida.innerHTML = "";

        registrarApi(email, primeiraSenha)

    } else {
        console.log("senhas diferentes")
        avisoSenhaRepetida.innerHTML = "As senhas não coincidem!";
    }
}