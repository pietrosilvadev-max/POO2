class Veiculo {
    constructor(marca, modelo, ano, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = velocidade;
    }
    acelerar() {
        this.velocidade += 10;
    }
    frear() {
        this.velocidade -= 10;

        if (this.velocidade < 0) {
            this.velocidade = 0;
        }
    }
    mostrarDados() {
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Ano: " + this.ano);
        console.log("Velocidade: " + this.velocidade);
        console.log();
    }
}

var veiculo1 = new Veiculo("Toyota", "Corolla", 2022, 50);
var veiculo2 = new Veiculo("Honda", "Civic", 2023, 60);
var veiculo3 = new Veiculo("Ford", "Mustang", 2020, 80);

veiculo1.mostrarDados();
console.log("Velocidade antes: " + veiculo1.velocidade);

veiculo1.acelerar();
veiculo1.acelerar();
veiculo1.acelerar();
console.log("Velocidade depois de acelerar: " + veiculo1.velocidade);

veiculo1.frear();
veiculo1.frear();
console.log("Velocidade depois de frear: " + veiculo1.velocidade);
veiculo1.mostrarDados();