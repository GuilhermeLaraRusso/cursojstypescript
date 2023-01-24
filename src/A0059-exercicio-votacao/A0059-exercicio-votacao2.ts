// tipo Voting Option é um objeto
type VotingOption = {
  numberOfVotes: number;
  option: string;
};

export class Voting {
  // VotionOption[] é um array de objetos do tipo VotingOption
  private _votingOptions: VotingOption[] = [];
  // inicialização do parâmetro details
  public details: string;

  constructor(details: string) {
    this.details = details;
  }

  // método para adicionar a opção a qual votar
  addVotingOption(votingOption: VotingOption): void {
    this._votingOptions.push(votingOption);
  }

  // método para votar
  vote(votingIndex: number): void {
    if (!this._votingOptions[votingIndex]) return;
    this._votingOptions[votingIndex].numberOfVotes += 1;
  }

  get votingOptions(): VotingOption[] {
    return this._votingOptions;
  }
}

export class VotingApp {
  private votings: Voting[];

  constructor() {
    this.votings = [];
  }

  // método que adiciona no parâmetro do tipo array 'votings' um objeto que foi instanciado pela classe 'Voting'
  addVoting(voting: Voting): void {
    this.votings.push(voting);
  }

  showVoting(): void {
    for (const voting of this.votings) {
      console.log(voting.details);
      for (const votingOption of voting.votingOptions) {
        console.log(`${votingOption.option} ${votingOption.numberOfVotes}`);
      }
      console.log('#### \n');
    }
  }
}

const voting1 = new Voting('Qual a sua linguagem de programação favorita?');
voting1.addVotingOption({ option: 'Python', numberOfVotes: 0 });
voting1.addVotingOption({ option: 'JavaScript', numberOfVotes: 0 });
voting1.addVotingOption({ option: 'TypeScript', numberOfVotes: 0 });
console.log(voting1);

voting1.vote(1);
voting1.vote(1);
voting1.vote(1);

const voting2 = new Voting('Qual sua cor favorita?');
voting2.addVotingOption({ numberOfVotes: 0, option: 'Red' });
voting2.addVotingOption({ numberOfVotes: 0, option: 'Blue' });
voting2.addVotingOption({ numberOfVotes: 0, option: 'Green' });

voting2.vote(0);

const votingApp = new VotingApp();
votingApp.addVoting(voting1);
votingApp.addVoting(voting2);
votingApp.showVoting();

// const teste = [
//   {
//     numberOfVotes: 0,
//     option: 'yello',
//   },
// ];

// Abaixo não funciona porque o método addVoting exige que seja passado como parâmetro algo que foi instanciado da classe 'Voting'
// votingApp.addVoting(teste);
