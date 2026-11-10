// ============================================================
// OPERAÇÕES MATEMÁTICAS
// ============================================================

/**
 * O JS funciona como uma calculadora. Os operadores aritméticos
 * são aplicados sobre valores do tipo number.
 */
let a = 10;
let b = 3;

console.log(a + b);   // 13      — adição
console.log(a - b);   // 7       — subtração
console.log(a * b);   // 30      — multiplicação
console.log(a / b);   // 3.333...— divisão (resultado pode ser decimal)
console.log(a % b);   // 1       — módulo: RESTO da divisão inteira (10 ÷ 3 = 3, sobra 1)
console.log(a ** b);  // 1000    — exponenciação: 10³ = 10 × 10 × 10

// O operador % (módulo) é muito usado para saber se um número é par ou ímpar:
console.log(10 % 2);  // 0 — par!   (resto zero = divisível por 2)
console.log(7 % 2);   // 1 — ímpar! (resto diferente de zero)

/**
 * Precedência de operadores (igual à matemática — regra PEMDAS):
 * 1° Parênteses ( )
 * 2° Potência **
 * 3° Multiplicação *, Divisão /, Módulo %
 * 4° Adição +, Subtração -
 */
console.log(2 + 3 * 4);    // 14 (3*4=12 primeiro, depois 2+12)
console.log((2 + 3) * 4);  // 20 (parênteses primeiro: 2+3=5, depois 5*4)

// CUIDADO com texto + número (coerção de tipos):
console.log("5" + 3);   // "53" — o JS converte 3 para string e concatena!
console.log(5 + 3);     // 8    — dois numbers, soma normal
// O operador + tem dupla função: soma números E concatena strings.

// Com - * / o JS sempre converte para número:
console.log("10" - 2);  // 8  — JS converte "10" para número automaticamente
console.log("10" * 2);  // 20 — idem
