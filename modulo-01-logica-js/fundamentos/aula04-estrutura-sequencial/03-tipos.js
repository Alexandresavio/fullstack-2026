// ============================================================
// TIPOS DE DADOS (o que o JS entende)
// ============================================================
/**
 * Assim como no mundo real temos diferentes tipos de coisas (números, palavras, verdade/mentira), no JS também.
 * O JavaScript possui dois grupos de tipos de dados:
 * → Primitivos: string, number, boolean, null, undefined, symbol, bigint
 * → Objetos: arrays, funções, datas, etc. (veremos em módulos futuros)
 * Por ora, foque nos primitivos abaixo.
 */

// STRING — texto entre aspas (simples, duplas ou crases)
console.log("Olá");    // aspas duplas
console.log('Mundo');  // aspas simples
console.log(`JS`);     // crases (template literals)
/**
 * Internamente, strings são sequências de caracteres Unicode.
 * Cada letra, espaço ou símbolo ocupa uma posição (índice), começando em 0.
 */

// NUMBER — números inteiros e decimais (o JS usa ponto, não vírgula!)
console.log(42);     // número inteiro
console.log(3.14);   // número com casas decimais
/**
 * Tecnicamente, o JS usa o padrão IEEE 754 de dupla precisão (64 bits)
 * para representar todos os números. Por isso, há limites:
 */
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991 — maior inteiro seguro
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991

// BOOLEAN — verdadeiro ou falso (pense como uma lâmpada: acesa ou apagada)
console.log(true);   // verdadeiro
console.log(false);  // falso

// NULL — ausência intencional de valor (você mesmo definiu que está vazio)
console.log(null);

// UNDEFINED — ausência não intencional (o JS não encontrou nenhum valor)
console.log(undefined);
/**
 * Diferença: null é como uma caixa vazia de propósito 
 * e o undefined é uma caixa que nem foi criada ainda.
 */

// SYMBOL (ES6+) — identificador único e imutável, usado em casos avançados
const id = Symbol("id");
console.log(typeof id);  // "symbol"

// Dois Symbols com a mesma descrição são sempre diferentes entre si:
console.log(Symbol("id") === Symbol("id"));  // false

// BIGINT (ES2020+) — para inteiros maiores que Number.MAX_SAFE_INTEGER
const numeroGigante = 9007199254740992n;  // note o "n" no final
console.log(numeroGigante + 1n);          // 9007199254740993n
// BigInt e Number não podem ser misturados diretamente em operações.

// Como descobrir o tipo de qualquer valor? Use typeof:
console.log(typeof "Olá");      // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" ← bug histórico do JS (existe desde 1995!)
console.log(typeof Symbol());   // "symbol"
console.log(typeof 42n);        // "bigint"