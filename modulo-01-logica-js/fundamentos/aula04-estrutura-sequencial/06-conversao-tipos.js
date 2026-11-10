// ============================================================
// CONVERSÃO DE TIPOS (coerção e casting)
// ============================================================
/**
 * O JS faz conversões de tipo de duas formas:
 * → Implícita (coerção): o JS converte sozinho, sem você pedir
 * → Explícita (casting): você converte manualmente com funções
 */

// TEXTO → NÚMERO (casting explícito)
let textoNumero = "42";
console.log(textoNumero + 8);          // "428" — coerção implícita: concatenou!
console.log(Number(textoNumero) + 8);  // 50    — casting explícito para número
console.log(parseInt("42.9abc"));      // 42    — lê inteiro até onde der
console.log(parseFloat("3.14xyz"));    // 3.14  — lê decimal até onde der
/**
 * parseInt e parseFloat são funções globais herdadas do ES1.
 * Elas ignoram caracteres não numéricos após o número válido.
 */

// NÚMERO → TEXTO (casting explícito)
let num = 100;
console.log(String(num) + " reais");  // "100 reais"
console.log(num.toString() + " kg");  // "100 kg"
console.log(num.toFixed(2));          // "100.00" — define casas decimais (retorna string)

// Coerção implícita — o JS fazendo por conta própria (cuidado!):
console.log("10" * 2);   // 20    — converte para número (- * / sempre convertem)
console.log("10" - 2);   // 8     — idem
console.log("10" + 2);   // "102" — MAS + prefere concatenar quando há string!

// Verificando se uma conversão falhou:
console.log(Number("abc"));  // NaN — "Not a Number"
console.log(isNaN("abc"));   // true  — isNaN() checa se o valor NÃO é número
console.log(isNaN("42"));    // false — "42" pode ser convertido em número
// NaN é do tipo "number" — mais um detalhe curioso do JS:
console.log(typeof NaN);     // "number"
// E NaN nunca é igual a si mesmo:
console.log(NaN === NaN);    // false — use isNaN() para verificar
