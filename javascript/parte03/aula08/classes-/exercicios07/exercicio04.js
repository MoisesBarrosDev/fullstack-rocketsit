// Exercício 4: Conta Bancária
//  Descrição:
// Crie uma superclasse chamada ContaBancaria com:

// Atributos:
// titular
// saldo

// Método:

// verSaldo() que imprime "Saldo atual de [titular]: R$ [saldo]"

// Crie duas subclasses que herdam de ContaBancaria:

class ContaBancaria {
  constructor({ titular, saldo }) {
    this.titular = titular
    this.saldo = saldo
  }

  verSaldo() {
    console.log(`O saldo atual de ${this.titular}: R$ ${this.saldo}`)
  }

}

class ContaCorrente extends ContaBancaria {
  constructor({ titular, saldo }) {
    super({ titular, saldo })
  }

  cobrarTarifa() {
    let tarifa = 65
    this.saldo -= tarifa
    console.log(`Tarifa cobrada. Novo saldo: ${this.saldo}`)
  }
}

const contaBancaria = new ContaBancaria({ titular: 'Thiago', saldo: 100 })
contaBancaria.verSaldo()

const contaCorrente = new ContaCorrente({ titular: 'Thiago', saldo: 100 })
contaCorrente.cobrarTarifa()
contaCorrente.verSaldo()