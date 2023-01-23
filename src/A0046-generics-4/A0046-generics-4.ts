type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina 1', 'Vacina 2'],
  idade: 10,
};

const vacinas = obterChave(animal, 'vacinas');
console.log(vacinas);

const cor = obterChave(animal, 'cor');
console.log(cor);

const idade = obterChave(animal, 'idade');
console.log(idade);
