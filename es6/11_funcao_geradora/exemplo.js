function* geradora() {
    yield 'primeiro valor';
    const variavel = yield 'variavel';
    return 'o valor da variável é ' + variavel;
}

let it = geradora();

console.log(it.next())
console.log(it.next())
console.log(it.next(10))