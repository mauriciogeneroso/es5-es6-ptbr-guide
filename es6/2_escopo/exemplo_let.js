for (let i = 0; i < 3; i++) {
    let algumaCoisa = 'Eu não tenho escopo de bloco';
}

console.log('Valor de i: ' + i); // Error
console.log(algumaCoisa); // Error