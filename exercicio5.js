class Aluno {
    constructor(nome, matricula, nota1, nota2, nota3) {
        this.nome = nome;
        this.matricula = matricula;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    calcularMedia() {
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    }

    verificarSituacao() {
        var media = this.calcularMedia();

        if (media >= 7) {
            return "Aprovado";
        } else if (media >= 5) {
            return "Recuperação";
        } else {
            return "Reprovado";
        }
    }
}

var aluno1 = new Aluno("João", 1, 8, 7, 9);
var aluno2 = new Aluno("Pedro", 2, 6, 5, 7);
var aluno3 = new Aluno("Lucas", 3, 4, 3, 5);
var aluno4 = new Aluno("Carlos", 4, 9, 8, 10);
var aluno5 = new Aluno("Gabriel", 5, 6, 6, 6);

var alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

for (var aluno of alunos) {
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.calcularMedia().toFixed(1));
    console.log("Situação: " + aluno.verificarSituacao());
    console.log();
}