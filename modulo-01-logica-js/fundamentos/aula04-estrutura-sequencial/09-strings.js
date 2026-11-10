// ============================================================
// STRINGS (trabalhando com texto)
// ============================================================
/**
 * Strings são textos. Internamente são sequências de caracteres Unicode,
 * onde cada posição possui um índice começando em 0.
 * São imutáveis: métodos não alteram a string original, retornam uma nova.
 */

const frase = "JavaScript é incrível!";

// COMPRIMENTO — número de caracteres (espaços e símbolos contam)
console.log(frase.length);  // 22

// ACESSO a caracteres por índice:
console.log(frase[0]);       // "J" — primeiro caractere
console.log(frase.at(-1));   // "!" — último (at() aceita índices negativos, ES2022+)

// MAIÚSCULAS e MINÚSCULAS
console.log(frase.toUpperCase());  // "JAVASCRIPT É INCRÍVEL!"
console.log(frase.toLowerCase());  // "javascript é incrível!"

// VERIFICAR conteúdo:
console.log(frase.includes("incrível"));   // true
console.log(frase.startsWith("Java"));     // true
console.log(frase.endsWith("!"));          // true

// ENCONTRAR posição de uma substring (índice começa em 0):
console.log(frase.indexOf("é"));       // 11 — primeira ocorrência
console.log(frase.indexOf("Python"));  // -1 — não encontrou
console.log(frase.lastIndexOf("!"));   // 21 — última ocorrência

// RECORTAR partes da string:
// slice(início, fim) — fim não é incluído; aceita índices negativos
console.log(frase.slice(0, 10));  // "JavaScript"
console.log(frase.slice(11));     // "é incrível!" (do índice 11 ao fim)
console.log(frase.slice(-9));     // "incrível!" (9 últimos caracteres)

// SUBSTITUIR texto:
console.log(frase.replace("incrível", "fantástico"));  // substitui 1ª ocorrência
console.log(frase.replaceAll("a", "@"));               // substitui todas (ES2021+)

// DIVIDIR em partes — retorna um array:
const palavras = frase.split(" ");  // divide onde há espaço
console.log(palavras);              // ["JavaScript", "é", "incrível!"]
console.log(palavras.length);       // 3 — número de palavras

// REPETIR e PREENCHER:
console.log("Ha".repeat(3));        // "HaHaHa"
console.log("5".padStart(3, "0"));  // "005" — preenche à esquerda
console.log("5".padEnd(3, "0"));    // "500" — preenche à direita

// REMOVER espaços das pontas (essencial ao tratar input de usuário):
const comEspacos = "   olá mundo   ";
console.log(comEspacos.trim());       // "olá mundo"
console.log(comEspacos.trimStart());  // "olá mundo   "
console.log(comEspacos.trimEnd());    // "   olá mundo"

// TEMPLATE LITERALS (ES6+) — a forma moderna de montar strings:
const produto = "café";
const preco = 8.5;

// Jeito antigo — concatenação com +:
console.log("O " + produto + " custa R$ " + preco);

// Jeito moderno — template literal com ${expressão}:
console.log(`O ${produto} custa R$ ${preco}`);
// Dentro de ${} cabe qualquer expressão JS válida:
console.log(`O dobro do preço seria R$ ${preco * 2}`);
console.log(`A frase tem ${frase.length} caracteres.`);
