// ============================================================
// INCREMENTO E DECREMENTO (atalhos para somar/subtrair 1)
// ============================================================

/**
 * Em programação, é muito comum somar ou subtrair 1 de uma variável.
 * Ex: contar passos, tentativas, pontuação num jogo.
 */
let pontos = 0;

pontos = pontos + 1;  // forma explícita
console.log(pontos);  // 1

pontos++;             // pós-incremento: usa o valor atual, depois soma 1
console.log(pontos);  // 2

++pontos;             // pré-incremento: soma 1 primeiro, depois usa o valor
console.log(pontos);  // 3

pontos--;             // pós-decremento
console.log(pontos);  // 2

// Diferença entre pós e pré-incremento dentro de uma expressão:
let x = 5;
console.log(x++);  // imprime 5 (valor atual), depois x vira 6
console.log(x);    // 6

let y = 5;
console.log(++y);  // y vira 6 primeiro, depois imprime 6
console.log(y);    // 6

// Operadores de atribuição composta (atalhos para qualquer valor):
let placar = 10;
placar += 5;   // placar = placar + 5  →  15
placar -= 3;   // placar = placar - 3  →  12
placar *= 2;   // placar = placar * 2  →  24
placar /= 4;   // placar = placar / 4  →  6
placar **= 2;  // placar = placar ** 2 →  36 (ES2016+)
placar %= 10;  // placar = placar % 10 →  6
console.log(placar);  // 6
