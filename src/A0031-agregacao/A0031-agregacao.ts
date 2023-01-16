export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneca', 1.9);
const produto3 = new Produto('Caneta', 0.9);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProduto(produto1);
carrinhoDeCompras.inserirProduto(produto1);
carrinhoDeCompras.inserirProduto(produto2);
carrinhoDeCompras.inserirProduto(produto3);

console.log(carrinhoDeCompras.quantidadeProdutos());
console.log(carrinhoDeCompras.valorTotal());
