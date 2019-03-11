var Pessoa = function(nome, idade, sexo, altura) {

    // privado
    var tall = altura;
    // públicos
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;

    // Setters - getters
    this.setNome = function(nome) {
        this.nome = nome;
    }
    this.setIdade = function(idade) {
        this.idade = idade;
    }
    this.setSexo = function(sexo) {
        this.sexo = sexo;
    }
    this.setAltura = function(altura) {
        tall = altura;
    }

    this.getNome = function() {
        return this.nome;
    }
    this.getIdade = function() {
        return this.idade;
    }
    this.getSexo = function() {
        return this.sexo;
    }
    this.getAltura = function() {
        return this.tall;
    }

    // método público
    this.mostrarPessoa = function() {
        return this.nome + ", " + this.idade + ", " + this.sexo + ", " + getCalcAltura();
    }

    // método privado
    function getCalcAltura() {
        return tall * 1.5;
    }
}

var pessoa = new Pessoa("Maria");
pessoa.setNome("Joana");
pessoa.setIdade(17);
pessoa.setSexo("F");
pessoa.setAltura(158);
console.log(pessoa.mostrarPessoa());