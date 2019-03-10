## 11 Funções Geradoras

Funções geradoras é mais um dos recursos que foram adicionados no ES6 e que não existiam no ES5.

A função geradora é um iterador que retorna um array para cada item definido dentro dela.

* Sintaxe no ES6: 

```
function* geradora() {
  yield 'value1';
  yield 'value2';
}
```

Ao iterar sobre os valores acima, será retornado dois objetos: ``{ value: 'value1', done: false }`` e ``{ value: 'value2', done: true}``. O campo ``value`` indica o valor retornado pela função geradora, e o campo ``done`` irá retorna ``true`` no último item retornado.

É possível passar dados por parâmetros para ser inserido em variáveis, no exemplo do arquivo ``exemplo.js``, ao iterar pela segunda vez e retornar ``variável``, é possível na próxima iteração informar por parâmetro o valor que será inserido na ``variavel``, e então na terceira iteração o valor é contatenado na string retornada.