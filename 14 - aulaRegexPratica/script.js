const numeros = /[?www.]\w+\.com.br|.com/;

console.log(numeros.test("www.thais.com.br"));
console.log(numeros.test("www.thais.com"));
console.log(numeros.test("thais.com"));
console.log(numeros.test("www.thais"));
