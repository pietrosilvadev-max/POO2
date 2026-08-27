class Funcionario{
    constructor(nome, cargo, salario){
        this.nome = nome;
        this.cargo = cargo
        this.salario = salario
    }
    apresentar(){
        console.log(`Olá meu nome é ${this.nome}, meu cargo é ${this.cargo} ganho ${this.salario}`);
    }
}
var pessoa1 = new Pessoa("Julio", "Gerente de Produção ", 8000);
var pessoa2 = new Pessoa("Matheus", "Programador Front-End Júnior", 4500);
var pessoa3 = new Pessoa("Miguel", "Engenheiro de Dados Sênior", 18650);

pessoa1.apresentar();
pessoa2.apresentar();
pessoa3.apresentar();

