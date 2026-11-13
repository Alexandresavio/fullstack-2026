// ============================================================
// BLOCO 2 — OPERADORES LÓGICOS (combinando condições)
// ============================================================
/***
 * Às vezes uma condição só não basta. Você precisa combinar várias.
 * Existem 3 operadores lógicos principais:
 * && (E lógico)  — AMBAS as condições precisam ser verdadeiras
 * || (OU lógico) — PELO MENOS UMA condição precisa ser verdadeira
 * !  (NÃO lógico) — INVERTE o valor booleano da condição
 */

/***
 * Exemplo do cotidiano para &&:
 * "Para entrar na festa, você precisa ter ingresso E ser maior de 18 anos"
 */
let temIngresso = true;
let maiorDeIdade = false;
console.log(temIngresso && maiorDeIdade);  // false — precisa das DUAS condições

/***
 * Exemplo do cotidiano para ||:
 * "Você pode pagar com dinheiro OU cartão"
 */
let temDinheiro = false;
let temCartao = true;
console.log(temDinheiro || temCartao);     // true — BASTA UMA ser verdadeira

/***
 * Exemplo do cotidiano para !:
 * "A loja está fechada? Então não posso entrar."
 */
let lojaAberta = false;
console.log(!lojaAberta);  // true — negou o false, virou true
// "A loja NÃO está aberta" = verdadeiro (de fato está fechada)

/***
 * Tabela verdade do && (E lógico):
 * true  && true  → true   (os dois concordam que é verdade)
 * true  && false → false  (um discorda, resultado é falso)
 * false && true  → false
 * false && false → false
 */

/***
 * Tabela verdade do || (OU lógico):
 * true  || true  → true   (pelo menos um é verdadeiro)
 * true  || false → true
 * false || true  → true
 * false || false → false  (nenhum dos dois é verdadeiro)
 */

/***
 * Avaliação de curto-circuito (short-circuit evaluation):
 * O JS é "preguiçoso": no &&, se o primeiro operando for false, ele para ali.
 * No ||, se o primeiro for true, ele para ali. Isso tem implicações práticas:
 */
let usuario = null;
let nomeExibido = usuario && usuario.length;  // evita erro: se usuario for null, para antes
console.log(nomeExibido);  // null — não tentou acessar .length de null

// Combinações mais complexas — avalie de dentro pra fora, como na matemática:
console.log((10 < 5) && (10 > 2));   // false && true  → false
console.log((10 > 5) || (10 < 2));   // true  || false → true
console.log(!(10 > 5) || (10 < 2));  // !true || false → false || false → false
// Dica: use parênteses para deixar a ordem de avaliação explícita e clara.

// ============================================================
// EXEMPLO REAL: AUTENTICAÇÃO
// ============================================================
/***
 * Um dos usos mais comuns de && é verificar login e senha juntos.
 * O usuário só entra se os DOIS estiverem corretos.
 * Este é um exemplo simplificado — em sistemas reais, senhas nunca ficam
 * no código e são verificadas no servidor com criptografia.
 */

let nomeUsuario = "Maria";
let senha = "minhasenha123";

let loginCorreto = nomeUsuario === "Maria" && senha === "minhasenha123";
console.log("Login autorizado?", loginCorreto);  // true

// O que acontece se só a senha estiver errada?
let loginErrado = nomeUsuario === "Maria" && senha === "senhaerrada";
console.log("Login autorizado?", loginErrado);   // false — && exige os dois corretos

// Usando ! para verificar se o login FALHOU:
if (!loginErrado) {
    console.log("Acesso negado. Verifique suas credenciais.");
}
