var objetoEmail = document.getElementById("exampleInputEmail1");
var objetoAlertaEmail = document.getElementById("alertaEmail");




function login() {

    var retorno = validateEmail(objetoEmail.value);

    if (!retorno) {
        objetoAlertaEmail.innerHTML = "Este não é um email  valido"
    } else {

        objetoAlertaEmail.innerHTML = ""

    }

}