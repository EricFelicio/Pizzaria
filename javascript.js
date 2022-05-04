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

function Comprar() {
    if (document.getElementById("selectQueijo").checked) {
        quantidadeQueijo = quantidadeQueijo + 1;
        valoresQueijo = valoresQueijo + 30.00;
        document.getElementById("quantidadeQueijo").innerHTML = quantidadeQueijo;
        document.getElementById("valoresQueijo").innerHTML = valoresQueijo;

    } else if (document.getElementById("selectFrango").checked) {
        quantidadeFrango = quantidadeFrango + 1;
        valoresFrango = valoresFrango + 50.00;
        document.getElementById("quantidadeFrango").innerHTML = quantidadeFrango;
        document.getElementById("valoresFrango").innerHTML = valoresFrango;

    } else if (document.getElementById("selectPeperone").checked) {
        quantidadePeperone = quantidadePeperone + 1;
        valoresPeperone = valoresPeperone + 20.00;
        document.getElementById("quantidadePeperone").innerHTML = quantidadePeperone;
        document.getElementById("valoresPeperone").innerHTML = valoresPeperone;

    } else {
        quantidadeBrocolis = quantidadeBrocolis + 1;
        valoresBrocolis = valoresBrocolis + 25.00;
        document.getElementById("quantidadeBrocolis").innerHTML = quantidadeBrocolis;
        document.getElementById("valoresBrocolis").innerHTML = valoresBrocolis;
    };
};

function Retirar() {
    if ( (document.getElementById("selectQueijo").checked) && (quantidadeQueijo > 0) && (valoresQueijo > 0) ) {
        quantidadeQueijo = quantidadeQueijo - 1;
        valoresQueijo = valoresQueijo - 30.00;
        document.getElementById("quantidadeQueijo").innerHTML = quantidadeQueijo;
        document.getElementById("valoresQueijo").innerHTML = valoresQueijo;

    } else if ( (document.getElementById("selectFrango").checked) && (quantidadeFrango > 0) && (valoresFrango > 0) )  {
        quantidadeFrango = quantidadeFrango - 1;
        valoresFrango = valoresFrango - 50.00;
        document.getElementById("quantidadeFrango").innerHTML = quantidadeFrango;
        document.getElementById("valoresFrango").innerHTML = valoresFrango;

    } else if ( (document.getElementById("selectPeperone").checked) && (quantidadePeperone > 0) && (valoresPeperone > 0) ) {
        quantidadePeperone = quantidadePeperone - 1;
        valoresPeperone = valoresPeperone - 20.00;
        document.getElementById("quantidadePeperone").innerHTML = quantidadePeperone;
        document.getElementById("valoresPeperone").innerHTML = valoresPeperone;

    } else if ( (document.getElementById("selectBrocolis").checked) && (quantidadeBrocolis > 0) && (valoresBrocolis > 0) ) {
        quantidadeBrocolis = quantidadeBrocolis - 1;
        valoresBrocolis = valoresBrocolis - 25.00;
        document.getElementById("quantidadeBrocolis").innerHTML = quantidadeBrocolis;
        document.getElementById("valoresBrocolis").innerHTML = valoresBrocolis;

    } else {};
};