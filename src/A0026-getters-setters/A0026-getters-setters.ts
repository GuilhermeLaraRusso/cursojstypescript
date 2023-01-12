export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

// Quando a classe possui um método setter e possui o "this." em seu constructor, o construtor chama o setter na inicialização da classe
const pessoa = new Pessoa('Guilherme', 'Russo', 34, '111-111-111-11');

// O setter é chamado quando se utliza o '=' , enquanto o getter é chamado quando se chama o atributo

// chamando o setter diretamente como se fosse um atributo
pessoa.cpf = '123.456.789-99';

// chamando o getter
console.log(pessoa.cpf);
