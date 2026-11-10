// ============================================================
// MATH (funções matemáticas prontas)
// ============================================================
// Math é um objeto nativo do JS com propriedades e métodos matemáticos.
// Não precisa importar nada — já está disponível globalmente.

// Número aleatório entre 0 (inclusive) e 1 (exclusive):
console.log(Math.random());  // ex: 0.7382...

// Número inteiro aleatório entre 1 e 10:
console.log(Math.random() * 10);

// Número inteiro aleatório entre 0 e 9:
console.log(Math.floor(Math.random() * 10));
// Math.random() → 0.0 a 0.999...
// * 10          → 0.0 a 9.999...
// Math.floor()  → arredonda pra baixo → 0 a 9

// Número aleatório entre 1 e N (fórmula universal):
// Math.floor(Math.random() * N) + 1
let aleatorio = Math.floor(Math.random() * 1000) + 1;
console.log("Número de 1 a 100:", aleatorio);

// Arredondamentos:
console.log(Math.round(4.4));   // 4 — arredonda para o mais próximo
console.log(Math.round(4.5));   // 5 — .5 vai para cima
console.log(Math.ceil(4.1));    // 5 — sempre arredonda para CIMA  (teto = ceiling)
console.log(Math.floor(4.9));   // 4 — sempre arredonda para BAIXO (chão = floor)
console.log(Math.trunc(4.9));   // 4 — remove as casas decimais (sem arredondar)
console.log(Math.trunc(-4.9));  // -4 — atenção: trunc ≠ floor para negativos!
// floor(-4.9) seria -5, pois floor vai ao inteiro ABAIXO.

// Máximo e mínimo:
console.log(Math.max(1, 99, 50, 23));  // 99
console.log(Math.min(1, 99, 50, 23));  // 1

// Potência e raiz:
console.log(Math.pow(2, 8));   // 256 — equivalente a 2 ** 8
console.log(Math.sqrt(144));   // 12  — raiz quadrada (√144)
console.log(Math.cbrt(27));    // 3   — raiz cúbica (∛27)
console.log(Math.log2(8));     // 3   — logaritmo base 2 de 8

// Valor absoluto (remove o sinal negativo):
console.log(Math.abs(-50));  // 50
console.log(Math.abs(50));   // 50 — positivo continua positivo

// Constantes matemáticas:
console.log(Math.PI);     // 3.141592653589793
console.log(Math.E);      // 2.718281828459045 — número de Euler (base do logaritmo natural)
console.log(Math.SQRT2);  // 1.4142135623730951 — raiz quadrada de 2

