let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultados = document.getElementById("resultado");

function CarnePP(duracao) {
    
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }

}

function CervejaPP(duracao) {
    
    if (duracao >=6) {
        return 2420;
    } else {
        return 1420;
    }

}

function BebidasPP(duracao) {
    
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }

}

function calcular() {

    console.log("CALCULANDO ...");
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let Carne = CarnePP(duracao) * adultos + (CarnePP(duracao) / 2 * criancas);
    let Cerveja = CervejaPP(duracao) * adultos;
    let Bebidas = BebidasPP(duracao) * adultos + (BebidasPP(duracao) / 2 * criancas);

    resultados.innerHTML = `<p>${Carne / 1000}kg de Carne`
    resultados.innerHTML += `<p>${Math.ceil(Cerveja / 355)} Latas de Cerveja`
    resultados.innerHTML += `<p>${Math.ceil(Bebidas / 2000)} Litros de refrigerante`

}