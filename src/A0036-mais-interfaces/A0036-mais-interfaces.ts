interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  idade?: number;
}

const pessoa1: Pessoa = {
  nome: 'Guilherme',
  sobrenome: 'Russo',
  enderecos: ['Av. Brasil'],
  idade: 30,
};

// Não funciona pois o atributo está como readonly
// pessoa1.enderecos.push('Av. Contorno');

pessoa1.idade = 31;
console.log(pessoa1);
