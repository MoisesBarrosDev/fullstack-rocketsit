// 🚀 Exercício 1: Crie uma classe de eletrônicos


// Crie uma superclasse Device com os atributos:
// brand (marca)
// power (ligado ou desligado)
// Depois, crie uma subclasse Smartphone que herda de Device e tem um novo atributo model.

// Regras:
// No constructor da subclasse, use super() para herdar brand e power.
// Crie um método togglePower() na superclasse para ligar/desligar.
// Crie um método info() no Smartphone que imprime a marca, modelo e se está ligado.



// Superclasse: Dispositivo genérico
class Device {
  constructor(brand, power) {
    this.brand = brand           // Marca do dispositivo
    this.power = power           // Estado: "ligado" ou "desligado"
  }

  // Método para alternar o estado (ligar/desligar)
  togglePower() {
    // Alterna entre ligado/desligado
    this.power = this.power === "ligado" ? "desligado" : "ligado"
    console.log(`${this.brand} está agora ${this.power}`)
  }
}

// Subclasse: Smartphone herda de Device
class Smartphone extends Device {
  constructor(brand, power, model) {
    // Passa marca e estado para o constructor da superclasse
    super(brand, power)

    this.model = model // Novo atributo exclusivo do Smartphone
  }

  // Método que mostra informações completas do smartphone
  info() {
    console.log(`Marca: ${this.brand}, Modelo: ${this.model}, Estado: ${this.power}`)
  }
}

// Criando um smartphone
const smartphone = new Smartphone("Samsung", "desligado", "Galaxy S21")

// Exibe informações
smartphone.info() // → Marca: Samsung, Modelo: Galaxy S21, Estado: desligado

// Alterna o estado de ligado/desligado
smartphone.togglePower() // → Samsung está agora ligado

// Mostra novamente as informações atualizadas
smartphone.info() // → Marca: Samsung, Modelo: Galaxy S21, Estado: ligado
