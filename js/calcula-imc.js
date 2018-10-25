var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var arrayDePacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < arrayDePacientes.length; i++){
    var paciente = arrayDePacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);    

    if(pesoValido && alturaValida){
        var imc = peso / (altura * altura);    
        tdImc.textContent = imc.toFixed(2);

    } else if(!pesoValido && alturaValida){
        console.log = ("Peso inválido.");
        tdImc.textContent = "Peso inválido.";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("informacao-invalida");

    } else if(pesoValido && !alturaValida){
        console.log = ("Altura inválida");
        tdImc.textContent = "Altura inválida.";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("informacao-invalida");

    } else {
        console.log = ("Peso e altura inválidas.");
        tdImc.textContent = "Peso inválido e altura inválida.";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("informacao-invalida");

    }
}

function validaPeso(peso){
    if(peso >= 0 &&  peso < 300){
        return true;  
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura <= 2.8){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
     
    imc = peso/ (altura * altura);

    return imc.toFixed(2);
}