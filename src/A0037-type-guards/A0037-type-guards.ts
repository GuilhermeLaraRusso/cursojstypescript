/* eslint-disable */

export function add(a: unknown, b: unknown) {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('1', '5'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

export class AnimalDeZoologico implements Animal {
  tipo: 'animal' = 'animal';
  constructor(public cor: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;

    case 'animal':
      console.log('Isso é um animal', obj.cor);
      return;
  }
}

mostraNome(new Aluno('João'));

mostraNome(new AnimalDeZoologico('azul'));

mostraNome({ tipo: 'animal', cor: 'Rosa' });
