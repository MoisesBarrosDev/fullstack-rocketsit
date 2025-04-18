// Sobrescrevendo Métodos em JavaScript (herança + personalização)

// Classe base (superclasse)
class Animal {
  constructor(name) {
    // Atributo name será compartilhado por todos os animais
    this.name = name
  }

  // Método padrão que todos os animais têm
  // Pode ser sobrescrito por subclasses (ex: Dog, Cat)
  makeNoise() {
    console.log("Algum som genérico do animal")
  }
}

//  Classe Dog herda de Animal
class Dog extends Animal {
  // Aqui estamos sobrescrevendo o método makeNoise
  // Esse método vai "substituir" o da classe Animal, apenas para objetos da classe Dog
  makeNoise() {
    console.log("Woof! Woof! Woof!") // Som típico de cachorro
  }
}

// Criando uma instância de Dog
const dog = new Dog("Belu") // Passamos o nome "Belu"
console.log(dog.name)       // Exibe o nome herdado da classe Animal → "Belu"
dog.makeNoise()             // Chama o método sobrescrito → "Woof! Woof! Woof!"

// dog.run() // ❌ Vai gerar erro, pois o método run() só existe na classe Cat

//  Classe Cat herda de Animal
class Cat extends Animal {
  // Aqui estamos sobrescrevendo o método makeNoise da superclasse
  makeNoise() {
    console.log("Miau... Miau... Miau...") // Som típico de gato
  }

  // Criamos um método exclusivo da classe Cat
  run() {
    console.log("Correndo...") // Só gatos têm esse método aqui
  }
}

// Criando uma instância de Cat
const cat = new Cat("Mel")   // Passamos o nome "Mel"
console.log(cat.name)        // Exibe o nome herdado da classe Animal → "Mel"
cat.makeNoise()              // Chama o método sobrescrito → "Miau... Miau... Miau..."
cat.run()                    // Chama o método exclusivo da classe Cat → "Correndo..."


//  Superclasse chamada Vehicle (Veículo)
// Essa é a classe base, que representa qualquer tipo de veículo
class Vehicle {
  constructor(brand, wheels) {
    // Atributos compartilhados por todos os veículos
    this.brand = brand       // Marca do veículo (ex: Honda, Ford)
    this.wheels = wheels     // Quantidade de rodas
  }

  // Método comum a todos os veículos
  start() {
    console.log(`${this.brand} está ligando...`)
  }
}

// Subclasse Car que herda de Vehicle
class Car extends Vehicle {
  constructor(brand, model) {
    // Chamando o constructor da classe mãe (Vehicle)
    // Informamos que carros sempre têm 4 rodas
    super(brand, 4)

    // Atributo exclusivo do carro
    this.model = model
  }

  // Sobrescrevendo o método start, mas ainda usando o da superclasse
  start() {
    super.start() // Chama o método da classe mãe
    console.log(`O carro modelo ${this.model} está pronto para dirigir.`)
  }
}

//  Subclasse Motorcycle que herda de Vehicle
class Motorcycle extends Vehicle {
  constructor(brand, engineType) {
    // Chamando o constructor da superclasse com 2 rodas
    super(brand, 2)

    // Atributo específico da moto
    this.engineType = engineType
  }

  // Sobrescrevendo o método start com comportamento próprio
  start() {
    super.start() // Chama o método da classe mãe
    console.log(`A moto com motor ${this.engineType} está acelerando!`)
  }
}

// -------------------
//  Criando um carro
const car = new Car("Toyota", "Corolla")
console.log(car.brand)       // Toyota
console.log(car.wheels)      // 4 (definido no super)
console.log(car.model)       // Corolla
car.start()
// Saída esperada:
// Toyota está ligando...
// O carro modelo Corolla está pronto para dirigir.

//  Criando uma moto
const moto = new Motorcycle("Honda", "150cc")
console.log(moto.brand)      // Honda
console.log(moto.wheels)     // 2 (definido no super)
console.log(moto.engineType) // 150cc
moto.start()
// Saída esperada:
// Honda está ligando...
// A moto com motor 150cc está acelerando!
