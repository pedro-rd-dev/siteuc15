var objetoEmail = document.getElementById("exampleInputEmail1");
var objetoPassword = document.getElementById("exampleInputPassword1");
var objetoAlertaEmail = document.getElementById("alertaEmail");






function login() {

    var retorno = validateEmail(objetoEmail.value);

    if (!retorno) {
        objetoAlertaEmail.innerHTML = "Este não é um email  valido"
    } else {
        logar();
        objetoAlertaEmail.innerHTML = ""

    }

}

function logar(){
    var usuario = JSON.stringify({email:objetoEmail.value, password: objetoPassword.value})

    $.ajax({
        url: "http://escolarapp2.herokuapp.com/account/login/",
        contentType: 'application/json',
        cache: false,
        method: 'POST',
        dataType: 'json',
        data: usuario,
        success: function(msg){
            console.log(msg)
        }
    });
}
