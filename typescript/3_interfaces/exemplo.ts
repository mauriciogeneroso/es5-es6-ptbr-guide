interface IPessoa {
    idade: number;
    cidade?: string;
    falar: () => void;
}

class Pessoa implements IPessoa {

    idade: number;

    constructor(idade) {
        this.idade = idade;
    }

    falar(): void {
        console.log('Falando...');
    }
}