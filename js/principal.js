var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 ||  peso >= 300){
    pesoValido = false;  
}

if(altura <= 0 || altura >= 3.00){
    alturaValida = false;
}

if(pesoValido && alturaValida){
    var imc = peso / (altura * altura);    
    tdImc.textContent = imc;
} else if(!pesoValido && alturaValida){
    console.log = ("Peso inválido.");
    tdImc.textContent = "Peso inválido.";
} else if(pesoValido && !alturaValida){
    console.log = ("Altura inválida");
    tdImc.textContent = "Altura inválida.";
} else {
    console.log = ("Peso e altura inválidas.");
    tdImc.textContent = "Peso inválido e altura inválida.";
}
