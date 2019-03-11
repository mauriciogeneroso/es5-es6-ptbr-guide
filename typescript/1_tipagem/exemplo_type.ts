type Cachorro = {
  nome: string,
  idade: number
}

type Gato = {
  nome: string,
  idade: number
}

type CachorroOuGato = Cachorro | Gato;

function bemVindo(animal: CachorroOuGato): void {}