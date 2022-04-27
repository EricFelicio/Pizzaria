'use restrict'

let quantidadeQueijo = 0;
let quantidadeFrango = 0;
let quantidadePeperone = 0;
let quantidadeBrocolis = 0;

let valoresQueijo = 0.00;
let valoresFrango = 0.00;
let valoresPeperone = 0.00;
let valoresBrocolis = 0.00;

let somaQuantidade = 0;
let somaValores = 0.00;

let buttonComprar = document.getElementById("buttonComprar");
let buttonRetirar = document.getElementById("buttonRetirar");


let inputPizza = document.getElementById("inputPizza");

switch (true)
{
    case inputPizza = "selectQueijo":
        quantidadeQueijo = quantidadeQueijo + 1;
        valoresQueijo = valoresQueijo + 30.00;
        document.getElementById("quantidadeQueijo").innerHTML = quantidadeQueijo;
        document.getElementById("valoresQueijo").innerHTML = valoresQueijo;
    break;

    case inputPizza = "selectFrango":
        quantidadeFrango = quantidadeFrango + 1;
        valoresFrango = valoresFrango + 50.00;
        document.getElementById("quantidadeFrango").innerHTML = quantidadeFrango;
        document.getElementById("valoresFrango").innerHTML = valoresFrango;
    break;

    case inputPizza = "selectPeperone":
        quantidadePeperone = quantidadePeperone + 1;
        valoresPeperone = valoresPeperone + 20.00;
        document.getElementById("quantidadePeperone").innerHTML = quantidadePeperone;
        document.getElementById("valoresPeperone").innerHTML = valoresPeperone;
    break;

    case inputPizza = "selectBrocolis":
        quantidadeBrocolis = quantidadeBrocolis + 1;
        valoresBrocolis = valoresBrocolis + 25.00;
        document.getElementById("quantidadeBrocolis").innerHTML = quantidadeBrocolis;
        document.getElementById("valoresBrocolis").innerHTML = valoresBrocolis;
    break;
};



