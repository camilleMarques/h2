
class Veiculo {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    ligar() {
      console.log(`O ${this.modelo} da marca ${this.marca} está ligado.`);
    }
  
    desligar() {
      console.log(`O ${this.modelo} da marca ${this.marca} está desligado.`);
    }
  }
  class Carro extends Veiculo {
    constructor(marca, modelo, numPortas) {
      super(marca, modelo);
      this.numPortas = numPortas;
    }
  
    abrirPortas() {
      console.log(`As ${this.numPortas} portas do ${this.modelo} estão abertas.`);
    }
  }
  
  class Moto extends Veiculo {
    constructor(marca, modelo, cilindrada) {
      super(marca, modelo);
      this.cilindrada = cilindrada;
    }
  
    acelerar() {
      console.log(`A ${this.modelo} da marca ${this.marca} está acelerando.`);
    }
}
  const meuCarro = new Carro('Toyota', 'Corolla', 4);
  meuCarro.ligar();
  meuCarro.abrirPortas();
  meuCarro.desligar();
  
  const minhaMoto = new Moto('Honda', 'CBR600RR', '600cc');
  minhaMoto.ligar();
  minhaMoto.acelerar();
  minhaMoto.desligar();
  