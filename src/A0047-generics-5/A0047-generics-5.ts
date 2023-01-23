export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

// const array: Array<number>
export class Stack<T> {
  public contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  lenght(): number {
    return this.contador;
  }

  showStack(): void {
    for (const key in this.elementos) {
      console.log(this.elementos[key]);
    }
  }
}

const pilha = new Stack<number>();
pilha.push(1);
console.log('contador' + pilha.contador);
pilha.push(2);
console.log('contador' + pilha.contador);
pilha.push(3);
console.log('contador' + pilha.contador);
pilha.push(4);
pilha.showStack();

// const elemento1 = pilha.pop();

while (!pilha.isEmpty()) {
  console.log(pilha.pop());
}
