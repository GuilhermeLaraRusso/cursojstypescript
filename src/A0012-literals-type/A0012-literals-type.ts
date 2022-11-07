let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;

let a: 100 = 100; // eslint-disable-line
a = 120; // Error: Type '120' is not assignable to type '100'.

const person = {
  name: 'Guilherme' as const,
  lastName: 'Russo',
};

person.name = 'Guilherme1'; // Error: Cannot assign to 'name' because it is a read-only property.

console.log(person);

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor(' '));
console.log(escolhaCor('Vermelho'));

// Module mode
export default 1;
