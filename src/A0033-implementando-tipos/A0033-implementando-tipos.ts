type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};

class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  public nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa1 = new Pessoa('Guilherme', 'Russo');
console.log(pessoa1.nomeCompleto());
