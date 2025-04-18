// Como aplicar herança com classes em JavaScript (orientação a objetos)

// Criamos uma classe base chamada Animal
// Essa classe será a "mãe", ou seja, outras classes vão herdar dela
class Animal {
  // O método constructor é chamado automaticamente quando criamos uma nova instância da classe
  constructor(name, age) {
    // Salvamos os valores nos atributos da classe
    this.name = name       // nome do animal
    this.age = age         // idade do animal
  }

  // Método que pode ser chamado por qualquer animal
  makeNoise() {
    console.log("Algum som genérico do animal")
  }
}

// Criando a classe Dog (Cachorro) que HERDA de Animal
// Usamos a palavra-chave "extends" para dizer que Dog é uma subclasse de Animal
class Dog extends Animal {
  // Neste caso, a classe Dog herda tudo da classe Animal
  // Mesmo sem escrever nada dentro dela, ela já tem acesso a:
  // - constructor (name, age)
  // - método makeNoise()
}

// Criamos uma nova instância da classe Dog
const dog = new Dog("Belu", 20) // Passamos nome e idade para o construtor da classe mãe (Animal)
console.log(dog.name)           // Acessamos o atributo herdado do Animal → "Belu"

// Criando a classe Cat (Gato), que também herda de Animal
class Cat extends Animal {
  // Também não precisa reescrever nada, pois já herda tudo de Animal
}

// Criamos uma instância da classe Cat
const cat = new Cat("Mel")      // Passamos só o nome. Como o age não foi passado, ficará "undefined"
console.log(cat.name)           // Exibe "Mel"
cat.makeNoise()                 // Chama o método herdado de Animal → "Algum som genérico do animal"
