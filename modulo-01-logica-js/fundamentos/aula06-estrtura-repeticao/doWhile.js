// ============================================================
// O laço do...while em JavaScript
// ============================================================
/***
 * O do...while (“faça... enquanto”) também repete um bloco enquanto uma condição for verdadeira.
 * A diferença para o while é que ele executa o bloco primeiro e só depois testa a condição.
 * Por isso o bloco sempre roda pelo menos uma vez, mesmo que a condição já comece falsa.
 */

let contador = 1;
console.log("Contando...")
do {
    console.log(contador);
    contador++;
} while (contador <=10);
console.log("Terminei de contar."); 

/**
 * FUP que solicita ao usuario um valor, quando for digitado o 0
 * some todos os valores digitados.
 */

const prompt = require('prompt-sync')();

let cont = 1;
let soma = 0;
let valor;
do {
    valor = Number(prompt(`Digite o ${cont}º valor (zero para finalizar):`));
    soma += valor;
    cont++;
} while (valor !== 0);
console.log(`A soma total dos valores é: ${soma}`);