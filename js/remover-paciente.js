var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    // var alvo = event.target;
    // var paiDoAlvo = alvo.parentNode;
    // paiDoAlvo.remove();

    event.target.parentNode.classList.add("fadeout");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500); //500ms, ou seja, 5s tempo para executar o fadeout.    
});
