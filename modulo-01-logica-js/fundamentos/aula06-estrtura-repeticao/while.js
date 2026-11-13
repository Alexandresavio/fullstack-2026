// ============================================================
// O laço while em JavaScript
// ============================================================
/***
 * O while (“enquanto”) repete um bloco de código enquanto uma condição for verdadeira.
 * A condição é testada antes de cada repetição. Se ela já começar falsa, o bloco não
 * roda nenhuma vez.
 */
let contador = 1;

while (contador <= 5) {
  console.log(contador);
  contador++; // atualiza a variável de controle
}
// 1, 2, 3, 4, 5

// Solitar ao usuário um numero e mostrar a tabuada deste numero
const prompt = require('prompt-sync')();

let cont = 1;
let valor = Number(prompt("Desja calcular a tabuada de qual valor? "));
while(cont <= 10){
    let resultado = (cont * valor);
    console.log(`${cont} X ${valor} = ${resultado}`);
    cont++;
}

/***
 * FUP que some os numeros de 1 até 10
 */
let i = 1;
let soma = 0;
while(i <= 10){
    soma += i;
    i++;
}
console.log(soma);

/***
 * FUP que solicita um numero ao usuario e calcula a tabuada do numero solicitado
 */

const PROMPT = require('prompt-sync')();
let numero = Number(PROMPT("Deseja calcular a tabuada de qual número?"));
contador = 0;
while(contador <= 10){
    console.log(`${contador} X ${numero} = ${contador * numero}`);
    contador++;
}
