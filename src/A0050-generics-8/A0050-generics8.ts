// Record
const objeto1: Record<string, string | number> = {
  nome: 'Guilherme',
  sobrenome: 'Russo',
  idade: 34,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required - transforma tudo que era opcional para obrigatório
type PessoaRequired = Required<PessoaProtocol>;

// Partial - transforma tudo em opcional
type PessoaPartial = Partial<PessoaRequired>;

// Readonly - transforma tudo em readonly
type PessoaReadOnly = Readonly<PessoaRequired>;

// Pick - permite escolhar as chaves do objeto que você quer utilizar
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Guilherme',
  sobrenome: 'Russo',
  idade: 34,
};
console.log(objeto2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

// Exclude - computa todos os tipos que estão em ABC e não estão em CDE (AB)
type TipoExclude = Exclude<ABC, CDE>;

// Extract - computa todos os tipo que estão em ABC e em CDE (C)
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

// type AccountApi = {
//   id: string;
//   nome: string;
//   idade: number;
// };

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'iofjiaosdjgadg',
  nome: 'Guilherme',
  idade: 34,
  sobrenome: 'Russo',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

// Module Mode
export default 1;
