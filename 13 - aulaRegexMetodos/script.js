const numeros = /\d+/;

console.log(numeros.exec("123 Existe numero"));
console.log(numeros.exec("Não existe numero"));

console.log(("123 Existe numero").match(/\d+/));

const nome = /\w+ (Thais|Tequila|Stella)/;

console.log(nome.test("Eu sou Stella"));
console.log(nome.test("Eu sou Pitu"));