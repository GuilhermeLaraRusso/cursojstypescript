export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

console.log(multiplicaArgs(1, 2, 3, 4, 5, 6));

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

console.log(concatenaString('a', 'b', 'c'));

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

console.log(toUpperCase('a', 'b', 'c'));
