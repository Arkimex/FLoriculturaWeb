function mostrarCadastro() {
    //Exibir formulario de cadastro
    const div = document.getElementById("minhaBarra");
    if (div.style.display =="flex"){
        div.style.display = "none";
    }else{
        div.style.display = "flex";
    }
}

function cadastroRealizado(){
    alert("Cadastro realizado!");
}