## 14 Promises

As promises permitem a execução de código assíncrono.

A necessidade desse comportamento no ES5 pode gerar grandes problemas de legitimidade de código quando começa a existirem muitas funções aninhadas. No exemplo ``exemplo_es5.js`` é demonstrado o uso do ``setTimeout`` para demonstrar que um código pode continuar executando outro ainda está esperando alguma coisa para de fato executar e o problema de aumento de código caso novos comportamentos comecem a serem adicionados.

A Promise no ES6 permite executar um comportamento através do método ``then`` quando houver sucesso e através do método ``catch`` quando houver erro. Ou seja, o código ficará assincrono e é possível definir de forma mais legítica a ordem das ocorrências.