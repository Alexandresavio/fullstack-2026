// ============================================================
// DATE (trabalhando com datas e horas)
// ============================================================
/**
 * Date é um objeto nativo do JS para lidar com datas e horas.
 * Internamente, ele armazena o tempo como um número inteiro:
 * a quantidade de milissegundos desde 1° de janeiro de 1970 às 00:00:00 UTC.
 * Esse ponto de referência se chama "Unix Epoch" ou "Unix Timestamp".
 */

// Data e hora AGORA:
const agora = new Date();       // captura o momento atual
console.log(agora.toString());  // ex: "Tue May 05 2026 14:32:10 GMT-0300"

// Timestamp atual em milissegundos (forma mais rápida):
console.log(Date.now());  // ex: 1746464930000

// Extraindo partes da data:
console.log("Ano:", agora.getFullYear());           // ex: 2026
console.log("Mês (0=jan):", agora.getMonth());      // 0 a 11 — CUIDADO! Janeiro = 0
console.log("Dia do mês:", agora.getDate());        // 1 a 31
console.log("Dia da semana:", agora.getDay());      // 0=domingo, 1=segunda, ..., 6=sábado
console.log("Hora:", agora.getHours());             // 0 a 23
console.log("Minutos:", agora.getMinutes());        // 0 a 59
console.log("Segundos:", agora.getSeconds());       // 0 a 59
console.log("Milissegundos:", agora.getMilliseconds()); // 0 a 999

// Exibindo de forma localizada (respeita idioma e fuso horário):
console.log("Data formatada:", agora.toLocaleDateString("pt-BR"));  // 05/05/2026
console.log("Hora formatada:", agora.toLocaleTimeString("pt-BR"));  // 14:32:10
console.log("Completo:", agora.toLocaleString("pt-BR"));            // 05/05/2026 14:32:10

// Criando uma data específica:
// new Date(ano, mês, dia, hora, minuto, segundo) — mês começa em 0!
const natal = new Date(2026, 11, 25);  // mês 11 = dezembro
console.log("Natal:", natal.toLocaleDateString("pt-BR"));  // 25/12/2026

// Criando data a partir de string no formato ISO 8601 (padrão internacional):
const reveillon = new Date("2026-12-31T23:59:59");
console.log("Réveillon:", reveillon.toLocaleString("pt-BR"));

// Calculando diferença entre datas:
// Subtrair dois objetos Date retorna a diferença em milissegundos.
const hoje = new Date();
const proximoAno = new Date(2027, 0, 1);  // 1° de janeiro de 2027
const diffMs = proximoAno - hoje;
const diffDias = Math.ceil(diffMs / (1000 * 60 * 60 * 24));  // ms → seg → min → h → dias
console.log(`Faltam ${diffDias} dias para 2027!`);

// Modificando partes de uma data:
let aniversario = new Date(1990, 4, 15);  // 15 de maio de 1990
aniversario.setFullYear(1991);            // altera apenas o ano
aniversario.setMonth(11);                 // altera para dezembro (11)
console.log("Aniversário ajustado:", aniversario.toLocaleDateString("pt-BR"));