// ============================================================
// TRUTHY e FALSY (valores que se comportam como boolean)
// ============================================================
/***
 * No JS, qualquer valor pode ser usado numa condição, mesmo sem ser true/false.
 * Isso acontece porque o JS faz uma coerção implícita para boolean ao avaliar
 * a condição de um if. Esse processo se chama "conversão para boolean".
 * 
 *  */

// Você pode ver o valor boolean de qualquer coisa com Boolean() ou !!:
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false
console.log(Boolean(false));      // false
// ↑ Esses 6 são os únicos valores FALSY do JS. Todo o resto é TRUTHY.

console.log(Boolean(1));          // true
console.log(Boolean("texto"));    // true
console.log(Boolean([]));         // true  ← array vazio é TRUTHY!
console.log(Boolean({}));         // true  ← objeto vazio é TRUTHY!
console.log(Boolean(-1));         // true  ← número negativo é TRUTHY!

// O !! (dupla negação) é um atalho comum para converter para boolean:
console.log(!!0);        // false
console.log(!!"texto");  // true
// É equivalente a Boolean(), mas mais curto de escrever.

// Uso prático — verificar string vazia:
let texto = "";
if (texto) {
    console.log("A string tem conteúdo.");
} else {
    console.log("A string está vazia.");  // ← cai aqui, pois "" é falsy
}

// ARMADILHA clássica — array vazio é truthy:
let lista = [];
if (lista) {
    console.log("O array existe (mesmo vazio, [] é truthy!)");  // ← cai aqui!
}
// Para verificar se um array está realmente vazio, use .length:
if (lista.length === 0) {
    console.log("O array está vazio de verdade.");  // ← agora sim
}

// Uso prático — verificar se o usuário preencheu um campo:
let campoBusca = "JavaScript";
if (campoBusca) {
    console.log("Buscando por:", campoBusca);  // executa porque a string tem conteúdo
} else {
    console.log("Digite algo para buscar.");
}


// ============================================================
// EXEMPLOS PRÁTICOS DO DIA A DIA
// ============================================================

// --- Frete grátis ou não ---
let valorCompra = 180;
if (valorCompra >= 200) {
    console.log("Frete GRÁTIS! ");
} else {
    let faltam = 200 - valorCompra;
    console.log(`Frete: R$ 20,00. Adicione mais R$ ${faltam} para frete grátis!`);
}

// --- Desconto por tipo de cliente ---
let tipoCliente = "premium";  // "vip", "premium" ou "regular"
if (tipoCliente === "vip") {
    console.log("Desconto de 20% ");
} else if (tipoCliente === "premium") {
    console.log("Desconto de 10% ");  // ← cai aqui
} else {
    console.log("Sem desconto.");
}

// --- Verificar disponibilidade de cor ---
// Array.includes() retorna true ou false — perfeito para usar em condicionais.
const coresDisponiveis = ["vermelho", "verde", "azul"];
let corEscolhida = "amarelo";
if (coresDisponiveis.includes(corEscolhida)) {
    console.log(`${corEscolhida} disponível! `);
} else {
    console.log(`${corEscolhida} indisponível. `);
}

// --- Verificar faixa etária para concurso ---
let idadeCandidato = 27;
if (idadeCandidato >= 18 && idadeCandidato <= 32) {
    console.log("Pode se inscrever no concurso! ");
} else {
    console.log("Fora da faixa etária para inscrição. ");
}

// --- Encontrar o maior entre três números ---
let n1 = 2, n2 = 8, n3 = 5;

if (n1 > n2 && n1 > n3) {
    console.log(`${n1} é o maior!`);
} else if (n2 > n1 && n2 > n3) {
    console.log(`${n2} é o maior!`);  // ← cai aqui (8 > 2 e 8 > 5)
} else if (n3 > n1 && n3 > n2) {
    console.log(`${n3} é o maior!`);
} else {
    console.log("Há empate entre dois ou mais números.");
}