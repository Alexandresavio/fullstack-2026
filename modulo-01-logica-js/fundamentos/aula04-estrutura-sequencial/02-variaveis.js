// ============================================================
// VARIÁVEIS (guardando valores na memória)
// ============================================================
/**
 * Uma variável é como uma caixinha com um nome escrito.
 * Você coloca um valor dentro dela e usa o nome para acessar depois.
 */

// LET — escopo de bloco, valor pode mudar (padrão moderno)
let idade = 20;
console.log(idade); // 20
idade = 21; // reatribuição permitida
console.log(idade); // 21

// CONST — escopo de bloco, valor não pode ser reatribuído (padrão moderno)
const NOME = "Carlos";
console.log(NOME);
/**
 * NOME = "João";  // ← TypeError: Assignment to constant variable.
 * Atenção: const impede a reatribuição da variável, mas não "congela" objetos.
 * Ex: um array declarado com const ainda pode ter itens adicionados.
 */

/**
 * VAR — escopo de função (forma antiga, evite usar)
 * var tem comportamentos confusos como "hoisting" e escopo global acidental.
 * "Hoisting" significa que o JS move declarações var para o topo do escopo
 * em tempo de execução, o que pode causar bugs difíceis de encontrar.
 */
var cidade = "Porto Alegre";
console.log(cidade);

/**
 * Regras para nomear variáveis:
 * nomeCompleto    (camelCase — padrão no JS)
 * minhaIdade
 * VALOR_MAXIMO    (UPPER_SNAKE_CASE — convenção para constantes)
 * 1nome           (não pode começar com número)
 * meu nome        (não pode ter espaço)
 * if / for / let  (palavras reservadas do JS)
 */

let semValor; // declarada, mas sem valor atribuído
console.log(semValor); // undefined
semValor = "Agora tem!";
console.log(semValor); // "Agora tem!"
