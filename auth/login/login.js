var objetoEmail = document.getElementById("exampleInputEmail1");
var objetoPassword = document.getElementById("exampleInputPassword1");
var objetoAlertaEmail = document.getElementById("alertaEmail");
var objetotextoLogando = document.getElementById("textoLogando");
var objetoTextoLogin = document.getElementById("textoLogin");

objetotextoLogando.style.display = 'none';
objetoEmail.value = "pedroh.mix@gmail.com"
objetoPassword.value = "123456";

function login() {

    var retorno = validateEmail(objetoEmail.value);

    if (!retorno) {
        objetoAlertaEmail.innerHTML = "Este não é um email  valido"
    } else {

        objetoTextoLogin.style.display = 'none';
        objetotextoLogando.style.display = 'inline';
        objetoAlertaEmail.innerHTML = ""


        logar();
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
        success: function(objetoToken){
            console.log(objetoToken)

            /////////////////////ARMAZENAMENTO//////////////////////////
            ///////////////////preparando token/////////////////////////
            const key = "Token " + objetoToken.key;

            //SALVANDO O TOKEN NO LOCAL STORAGE DO NAVEGADOR
            window.localStorage.setItem("Token",key);


            objetotextoLogando.style.display = 'none';
            objetoTextoLogin.style.display = 'inline';

            window.location.href ="../../tarefas/tarefas.html"

        },
        error: function (error){
            var erros = JSON.parse(error.responseText)

            console.log(erros.non_field_errors[0])

            objetoAlertaEmail.innerHTML  =erros.non_field_errors[0]

            objetotextoLogando.style.display = 'none';
            objetoTextoLogin.style.display = 'inline';
        }
    });
}
