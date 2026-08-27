class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    apresentar() {
        console.log("Nome: " + this.nome);
        console.log("Preço: R$ " + this.preco);
        console.log("Quantidade: " + this.quantidade);
    }
}

class Carrinho {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    calcularTotal() {
        var total = 0;

        for (var produto of this.produtos) {
            total += produto.preco * produto.quantidade;
        }
        return total;
    }
}

var produto1 = new Produto("Arroz", 25, 2);
var produto2 = new Produto("Feijão", 10, 3);
var carrinho = new Carrinho();
carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);

produto1.mostrarProduto();
produto2.mostrarProduto();
console.log("Total da compra: R$ " + carrinho.calcularTotal());