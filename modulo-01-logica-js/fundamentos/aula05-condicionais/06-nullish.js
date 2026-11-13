// ============================================================
// NULLISH COALESCING ?? (valor padrão seguro)
// ============================================================
// O operador ?? foi introduzido no ES2020 (ES11).
// Ele retorna o lado direito APENAS se o lado esquerdo for null ou undefined.
// É muito usado para definir valores padrão de forma segura.

let nomeVisitante = null;      // imagine que veio de um banco de dados vazio
let nomeExibido2 = nomeVisitante ?? "Visitante";
console.log(nomeExibido2);     // "Visitante" — pois nomeVisitante era null

let outroNome = "Ana";
let outroExibido = outroNome ?? "Visitante";
console.log(outroExibido);     // "Ana" — não era null/undefined, então usa o original

// Diferença crucial entre ?? e ||:
// || retorna o lado direito se o esquerdo for qualquer valor "falsy"
//    (false, 0, "", NaN, null, undefined)
// ?? retorna o lado direito SOMENTE para null ou undefined

let quantidade = 0;  // zero é um valor válido (ex: quantidade de itens no carrinho)
console.log(quantidade || 10);  // 10 — porque 0 é falsy, || substituiu por 10 (indesejado!)
console.log(quantidade ?? 10);  // 0  — 0 não é null nem undefined, ?? mantém o 0 (correto!)

// Encadeamento opcional com ?. (optional chaining — ES2020):
// Permite acessar propriedades de objetos que podem ser null ou undefined
// sem causar erro. Funciona bem junto com ??.
let perfil = null;
console.log(perfil?.nome);           // undefined — não lança erro
console.log(perfil?.nome ?? "Anônimo"); // "Anônimo" — combina ?. com ??