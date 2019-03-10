## 2 Bloco de escopo

Ao declarar uma variável com ``var`` no ES5, não há escopo de bloco, então, conforme no arquivo ``exemplo_var.js``, é possível ver que a variável declarada dentro do bloco ``for``, ainda é acessível fora do bloco. Esse comportamento pode ser um gerador de problemas.

* Sintaxe no ES5: ``var nomeVariavel = valor;``.

A partir do ES6, para resolver esse problema foi introduzido a palavra reservada ``let``, permitindo a declaração de variáveis respeitando escopo de bloco. No exemplo ``exemplo_let.js``, é possível verificar que ao executar o arquivo irá ocorrer erro, pois as variáveis já não pertencem mais ao mesmo escopo.

* Sintaxe no ES6: ``let nomeVariavel = valor;``.