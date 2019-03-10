var calculadora = require('./calculadora');

console.log('Iniciar');
calculadora.soma(5, 6)
    .then((res) => console.log('A soma é ' + res))
    .catch((error) => console.log(error));
console.log('Terminou');