## 9 Classes

Para criar uma classe no ES5 de forma semelhante a outras linguagens de programação, como Java ou C#, era necessário dispor de todo o trabalho conforme demonstrado no arquivo ``classe_es5.js``.

No ES6 foi introduzido a palavra reservada ``classe`` que permite a criação de classes de forma semelhante a outras linguagens de programação.

A sintaxe para declaração de classes no ES6 pode ser conforme abaixo.

```
class Triangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}
```
ou 
```
let triangulo = class {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}
```
ou
```
let triangulo = class Triangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}
```

Obs: As classes no ES6 permitem a exitência de métodos estáticos e herança.