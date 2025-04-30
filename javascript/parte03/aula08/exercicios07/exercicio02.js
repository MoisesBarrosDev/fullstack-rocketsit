//  Exercício 2: Hierarquia de Transportes

//  Descrição:
// Crie uma superclasse chamada Transport com:
// Atributo: type (tipo do transporte: avião, barco, etc)
// Método: move() que imprime "O transporte está em movimento."

// Crie duas subclasses:

// Bike: sobrescreva move() para mostrar "A bicicleta está pedalando."

// Airplane: sobrescreva move() para mostrar "O avião está voando."

// Crie instâncias das duas e chame os métodos normalmente.


// Superclasse Transport
class Transport {
  constructor(type) {
    this.type = type
  }

  // Método genérico da superclasse
  move() {
    console.log("O transporte está em movimento.")
  }
}

// Subclasse Bike
class Bike extends Transport {
  constructor() {
    super("Bicicleta")
  }

  // Sobrescrevendo o método move
  move() {
    console.log("A bicicleta está pedalando.")
  }
}

// Subclasse Airplane
class Airplane extends Transport {
  constructor() {
    super("Avião")
  }

  // Sobrescrevendo o método move
  move() {
    console.log("O avião está voando.")
  }
}

// Testando as instâncias
const bike = new Bike()
const airplane = new Airplane()

bike.move()       // → A bicicleta está pedalando.
airplane.move()   // → O avião está voando.
