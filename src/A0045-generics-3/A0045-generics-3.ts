interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Guilherme',
  sobrenome: 'Russo',
  idade: 34,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 564,
  sobrenome: 8974,
  idade: 34,
};

const aluno3: PessoaProtocolo = {
  nome: 'Guilherme',
  sobrenome: 'Russo',
  idade: 34,
};

console.log(aluno1, aluno2, aluno3);
