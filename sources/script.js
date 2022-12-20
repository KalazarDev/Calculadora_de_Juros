// # Calculo composto
// # Primeiro Passo, pegar o valor do Aporte
// # Segundo passo -> Pegar o valor de rendimento Diario (%)
// # Terceiro Passo -> Quantos dias para Calcular (Dias corridos)
// # Perguntar se é juros compostos
// # Quarto passo -> Gerar Tabela de Progressão

// Capturando dados do Html
const button = document.querySelector("button");
const vlr_ini = document.querySelector("#vlr_ini");
const jur = document.querySelector("#jur");
const tempo = document.querySelector("#tempo");


// Capturando Evento de envio do Botão

button.addEventListener("click", () => {
    alert(`${vlr_ini.value} ${jur.value} ${tempo.value}`);
})


// Adicionar Função

var valor_inicial = 100
var valor_juros = 1
var periodo = 100
var valor_corrigido = 0.00

for (let i = 1; i < periodo; i++) {

    if (valor_corrigido === 0.00) {
        var juros =  valor_inicial * (valor_juros/100)
        valor_corrigido += juros + valor_inicial;
    }
    else {
        var juros =  valor_corrigido * (valor_juros/100)
        valor_corrigido += juros;
    }

    console.log(`Dia ${i} ${parseFloat(valor_corrigido.toFixed(2))}`)

}


