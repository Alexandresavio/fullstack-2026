// ============================================================
// BLOCO 4 — IF / ELSE (se isso... senão...)
// ============================================================
/***
 * O if é a estrutura de decisão mais fundamental da programação.
 * Em português: "SE [condição] for verdadeira, faça [bloco A], SENÃO faça [bloco B]."
 * Os blocos de código ficam entre chaves {} e podem conter quantas linhas quiser.
 */

const nota = 75;

if (nota >= 60) {
    console.log("APROVADO!");  // executado se nota for 60 ou mais
} else {
    console.log("REPROVADO."); // executado se nota for menos que 60
}

// O ELSE é opcional — você pode ter um if sem else:
if (nota === 100) {
    console.log("Nota máxima! Parabéns!");
}
// Se nota não for 100, simplesmente nada acontece aqui.

/***
 * IF / ELSE IF / ELSE — para múltiplas condições em sequência:
 * O JS testa cada condição de cima pra baixo e executa apenas a primeira verdadeira.
 * As demais são ignoradas, mesmo que também sejam verdadeiras.
 */
let temperatura = 28;

if (temperatura < 0) {
    console.log("Está congelando!");
} else if (temperatura < 15) {
    console.log("Está frio. Pegue um casaco.");
} else if (temperatura < 25) {
    console.log("Temperatura agradável.");
} else {
    console.log("Está quente!");  // ← cai aqui (28 não satisfez nenhuma condição anterior)
}
// Apenas UMA mensagem é exibida. O else final é o "em todos os outros casos".

/***
 * Blocos de uma linha — as chaves são opcionais, mas EVITE omiti-las:
 * if (nota >= 60) console.log("Aprovado"); ← funciona, mas é considerada má prática.
 * Com chaves, o código é mais legível e menos sujeito a bugs acidentais.
 */