class Livro{
    constructor(titulo, autor, ano, disponivel){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.disponivel = disponivel;
    }
    apresentar(){
        console.log("Titulo: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Ano: " + this.ano);
        console.log("Disponivel: " + this.disponivel);
    }
    emprestar(){
        if(this.disponivel){
            this.disponivel = false;
            console.log("Livro emprestado!");
        }else{
            console.log("O livro já está emprestado");
        }
        devolver()
            this.disponivel = true;
            console.log("Livro devolvido!");
    }
}
var livro1 = new Livro("Harry Potter", "J.K. Rowling", 1997, true);
var livro2 = new Livro("O Hobbit", "J.R.R. Tolkien", 1937, true);
var livro3 = new Livro("Dom Casmurro", "Machado de Assis", 1899, true);

livro1.apresentar();
livro2.apresentar();
livro3.apresentar();

livro1.emprestar();
livro1.emprestar();
livro1.devolver();
livro1.emprestar();