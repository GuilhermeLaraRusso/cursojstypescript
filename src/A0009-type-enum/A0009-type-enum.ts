enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
  VERDE = 100, // 100
  ROXO = 'ROXO', // 'ROXO'
}

enum Cores {
  LARANJA = 'LARANJA', // 'LARANJA'
}

console.log(Cores);
console.log(Cores.VERMELHO); // 0
console.log(Cores.AZUL); // 1
console.log(Cores.AMARELO); // 2
console.log(Cores[0]); // VERMELHO
console.log(Cores[100]); // VERDE
console.log(Cores['ROXO']); // ROXO
console.log(Cores['LARANJA']); // LARANJA
