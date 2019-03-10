## 4 Rest parameters

No ES5 não era possível passar um número ilimitado de parâmetros para uma função. A partir do ES6 esse recurso passou a ser possível.

No arquivo ``exemplo.js``, é demonstrado o uso desse resurso. A utilização deve ser feita utilizando três pontos e o nome do array que irá receber as variáveis, ``...params``.

Como exemplo, se temos uma função que recebe um ``...params`` como parâmetro, ao chamar a função com os argumentos ``'a', 'b', 'c'``, o resultado final será ``param = ['a', 'b', 'c']``