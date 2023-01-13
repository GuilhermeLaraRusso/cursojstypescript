// Quando cria uma classe abstrata, ela não pode ser instanciada diretamente,
// tem que ser instanciada pelas suas subclasses
export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    console.log(`${this.nome} está atacando...`);
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} ${this.nome} agora tem ${this.vida} de vida...`);
  }

  // Quando cria um método abstrato, não se cria o corpo do método.
  // Esse método abstrato obriga as subclasses extendidas dessa classe possuam esse método
  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(this.emoji + 'GUERRREIRAAAA AO ATAQUE');
  }
}

export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + 'GRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);

monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
