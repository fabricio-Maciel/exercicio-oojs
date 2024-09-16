class Animal {
  constructor(nome, som) {
    if (this.constructor === Animal) {
      throw new Error(
        "Animal é uma classe abstrata e não pode ser instanciada diretamente."
      );
    }
    this.nome = nome;
    this.som = som;
  }

  fazSom() {
    console.log(`${this.nome} faz o som: ${this.som}`);
  }
}

class Cao extends Animal {
  constructor(nome) {
    super(nome, "Auau");
  }

  buscarBola() {
    console.log(`${this.nome} está pegando a bola`);
  }
}

class Gato extends Animal {
  constructor(nome) {
    super(nome, "Miau");
  }

  arranhar() {
    console.log(`${this.nome} está arranhando os móveis!`);
  }
}

const cao1 = new Cao("Marley");
const cao2 = new Cao("Max");
const gato1 = new Gato("Mingau");

dog1.fazSom();
dog2.buscarBola();
gato1.arranhar();
