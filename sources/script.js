// # Calculo composto
// # Primeiro Passo, pegar o valor do Aporte
// # Segundo passo -> Pegar o valor de rendimento Diario (%)
// # Terceiro Passo -> Quantos dias para Calcular (Dias corridos)
// # Perguntar se é juros compostos
// # Quarto passo -> Gerar Tabela de Progressão

// Capturando dados do Html
const button = document.querySelector("button");
const buttonLimpar = document.querySelector("#limpar");
// const vlr_ini = document.querySelector("#vlr_ini");
// const jur = document.querySelector("#jur");
// const tempo = document.querySelector("#tempo");


// Adicionar Função

var vlr_ini = 100
var jur = 1
var valor_corrigido = 0.00
var tempo = 100

function criaTabela() {
    const criaTable = document.createElement("table")
    const criaThead = document.createElement("thead")
    const criaHead = document.createElement("th");
    const criaHead2 = document.createElement("th");
    const section = document.querySelector("section");
    
    section.appendChild(criaTable)
    criaTable.appendChild(criaThead)
    criaThead.appendChild(criaHead)
    criaThead.appendChild(criaHead2)
    criaHead.innerHTML = "DIA"
    criaHead2.innerHTML = "VALOR"


}

function Calcula_Juros() {
for (let i = 1; i < tempo; i++) {

    if (valor_corrigido === 0.00) {
        var juros =  vlr_ini * (jur/100)
        valor_corrigido += juros + vlr_ini;
    }
    else {
        var juros =  valor_corrigido * (jur/100)
        valor_corrigido += juros;
    }

    const tabela = document.querySelector("table")

    const criaTbody = document.createElement("tbody")
    const linha = document.createElement("tr");

    const inserdias = document.createElement("td");
    const inserdados = document.createElement("td");

    const section = document.querySelector("section");

    tabela.appendChild(criaTbody)
    tabela.appendChild(linha);
    linha.appendChild(inserdias)
    linha.appendChild(inserdados);

    inserdias.innerHTML =  `Dia ${i}`
    inserdados.innerHTML = parseFloat(valor_corrigido.toFixed(2));

}}

// Capturando Evento de envio do Botão
// console.log(Calcula_Juros())
button.addEventListener("click", () => {
    tbl = document.querySelector("table")
    if ( document.getElementsByTagName("table").length > 0) {
        var table = document.getElementsByTagName("table")[0];
        table.parentNode.removeChild(table);
    
    } else {
        criaTabela()
        Calcula_Juros()
    }

  

})


buttonLimpar.addEventListener("click", () => {
    tbl = document.querySelector("table")
    if ( document.getElementsByTagName("table").length > 0) {
        var table = document.getElementsByTagName("table")[0];
        table.parentNode.removeChild(table);
    
    } else {
        criaTabela()
        Calcula_Juros()
    }

  

})

