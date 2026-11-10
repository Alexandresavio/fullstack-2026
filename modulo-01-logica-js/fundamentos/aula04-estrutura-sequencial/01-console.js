// ============================================================
// BLOCO 1 — EXIBINDO MENSAGENS (console.log)
// ============================================================

/**
 * console.log() é como um "falar em voz alta" para o computador.
 * Tudo que você colocar dentro dos parênteses aparece no terminal.
 */

/**
 * Tecnicamente, console é um objeto global disponível tanto no navegador quanto no Node.js,
 * e log() é um de seus métodos.
 * Outros métodos úteis:
 * console.warn()  → exibe aviso em amarelo
 * console.error() → exibe erro em vermelho
 * console.table() → exibe dados em formato de tabela
 */

console.log("Olá, mundo!"); // texto com aspas duplas
console.log("Olá de novo!"); // aspas simples também funcionam
console.log(`E eu uso crases!`); // crases são chamadas de "template literals"
/**
 * Lembrando: se quiser expor aspas dentro de um texto, as internas
 * não podem ser iguais às externas. Ex: "Ele disse 'olá' " funciona.
 */

// Você pode exibir mais de uma coisa de uma vez, separando por vírgulas:
console.log("Meu nome é", "Ana", "e tenho", 25, "anos");
// Resultado: Meu nome é Ana e tenho 25 anos

/**
 * Por que isso é útil?
 * Enquanto você programa, usa console.log para "ver" o que está acontecendo.
 * É como acender a luz num quarto escuro para ver o que tem lá dentro.
 */
