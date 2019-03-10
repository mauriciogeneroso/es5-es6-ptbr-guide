## 8 Módulos

Modulos é um recurso que foi adicionado ao ES6. Todo arquivo no Javascript é um módulo.

Neste exemplo, o arquivo ``calculadora.js`` é um módulo, para exportar algum recurso desse módulo deve-se utilizar a palavra reservada ``exports``. Neste exemplo está sendo exportado uma constante PI e uma função.

Para importar um módulo em outro arquivo JS, deve-se utilizar a sintaxe ``import { } from 'folder/file'``. Dentro das chaves deve ser informado a variável, função ou outro recurso que está sendo importado. Em ``folder/file`` deve ser informado o caminho do arquivo de onde será importado.

Há um porém que merece atenção, o node não entende o ``export`` e o ``import`` do ES6. Para ser possível executar esse exemplo, deverá ser instalado via npm o es6-module-transpile.

```
npm install es6-module-transpiler -g
```

Após efetuar a instalação, deverá ser executado o comando com a sintaxe abaixo:

```
compile-modules convert [arquivos] -I [caminho dos arquivos a serem importados] -o [pasta de saída] --format [formato da saída].
```

Para este exemplo, será utilizado o comando abaixo:

```
compile-modules convert ./exemplo.js ./calculadora.js -I . -o build --format commonjs
```

Se abrir o arquivo final, será possível ver que o ``export`` e ``import`` foram traduzidos para ``exports`` e ``require``, que são o que o node.js entende atualmente.

Após isso, basta executar o arquivo como ``node build/exemplo.js``.