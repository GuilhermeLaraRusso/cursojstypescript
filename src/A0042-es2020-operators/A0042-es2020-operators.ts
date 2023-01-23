// Encadeamento opcional e Operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento1: Documento = {
  titulo: 'titulo',
  texto: 'texto',
  // data: new Date(),
};

const documento2: Documento = {
  titulo: 'titulo',
  texto: 'texto',
  data: new Date(),
};

const documento3: Documento = {
  titulo: 'titulo',
  texto: 'texto',
  data: new Date(),
};

// Operador de coalescência nula "??" checa se o valor é null ou undefined. Se for algum desses valores, executa o lado direito, após o "??"
console.log(documento1.data?.toDateString() ?? '1 - Ixi, não exite data.');
console.log(undefined ?? '2 - Ixi, não exite data.');
console.log(null ?? '3 - Ixi, não exite data.');
console.log(false ?? '4 - Ixi, não exite data.');
console.log(0 ?? '5 - Ixi, não exite data.');
console.log('' ?? '6 - Ixi, não exite data.');
console.log(documento2.data?.toDateString() ?? '1 - Ixi, não exite data.');
console.log(documento3.data?.toDateString() ?? '1 - Ixi, não exite data.');
