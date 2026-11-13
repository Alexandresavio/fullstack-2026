// ============================================================
// OPERADOR TERNÁRIO (if/else em uma linha)
// ============================================================
/***
 * Quando a decisão é simples (só dois caminhos), o ternário é mais enxuto.
 * Sintaxe: condição ? expressãoSeVerdadeiro : expressãoSeFalso
 * É o único operador do JS que recebe TRÊS operandos (por isso "ternário").
 */

let saldo = 150;
let mensagemSaldo = saldo >= 0 ? "Saldo positivo" : "Saldo negativo";
console.log(mensagemSaldo);  // "Saldo positivo"

// Verificando par ou ímpar com ternário:
let numero = 17;
// O % retorna o RESTO da divisão. Se dividir por 2 e sobrar 0, é par.
console.log(numero % 2 === 0 ? "PAR" : "ÍMPAR");  // "ÍMPAR" (17 ÷ 2 = 8, sobra 1)

/***
 * O ternário é uma expressão, não uma instrução — isso significa que ele
 * RETORNA um valor e pode ser usado dentro de template literals, atribuições, etc:
 */
let desconto = 0.1;
console.log(`Você tem ${desconto > 0 ? "desconto" : "preço cheio"} nessa compra.`);

// Atenção: o ternário é ótimo para casos simples.
// Para lógicas complexas, prefira o if/else — é mais legível.

// Comparação lado a lado:
// Com if/else (mais claro para lógicas com múltiplos caminhos):
let hora = new Date().getHours();
let saudacao;
if (hora < 12) {
    saudacao = "Bom dia!";
} else if (hora < 18) {
    saudacao = "Boa tarde!";
} else {
    saudacao = "Boa noite!";
}
console.log(saudacao);

// Com ternário aninhado (mais compacto, porém menos legível):
let saudacao2 = hora < 12 ? "Bom dia!" : hora < 18 ? "Boa tarde!" : "Boa noite!";
console.log(saudacao2);
// Aqui o if/else é mais claro. Ternário aninhado dificulta a leitura — use com moderação.
