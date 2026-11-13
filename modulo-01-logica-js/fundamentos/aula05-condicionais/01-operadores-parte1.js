// ============================================================
// OPERADORES DE COMPARAÇÃO (fazendo perguntas)
// ============================================================
/**
 * Comparações sempre retornam true (verdadeiro) ou false (falso).
 * Pense como perguntas com resposta de sim ou não.
 * O resultado de uma comparação é sempre um valor do tipo boolean.
 */

console.log(10 > 5);    // true  — 10 é maior que 5? SIM
console.log(10 < 5);    // false — 10 é menor que 5? NÃO
console.log(10 >= 10);  // true  — 10 é maior OU igual a 10? SIM (é igual!)
console.log(10 <= 9);   // false — 10 é menor ou igual a 9? NÃO

// ==  vs  ===  (essa é uma das maiores confusões do JS para iniciantes!)
// == compara apenas o VALOR (usa coerção de tipo — converte antes de comparar):
console.log(10 == "10");   // true  — "10" é convertido para número antes de comparar
console.log(0 == false);   // true  — false é convertido para 0
console.log("" == false);  // true  — string vazia e false ambos viram 0
console.log(null == undefined); // true — exceção especial do JS

// === compara VALOR e TIPO (igualdade estrita — sem nenhuma conversão):
console.log(10 === "10");  // false — número ≠ string, tipos diferentes!
console.log(10 === 10);    // true  — mesmo valor E mesmo tipo

// REGRA DE OURO: sempre prefira === no seu código.
// O == pode gerar surpresas desagradáveis. O === é previsível e seguro.

// !=  vs  !==  (a negação das comparações acima):
console.log(10 != "10");   // false — == enxerga como iguais (mesmo com tipos diferentes)
console.log(10 !== "10");  // true  — === enxerga como diferentes (tipos distintos)

