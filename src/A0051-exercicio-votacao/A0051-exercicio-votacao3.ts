type VotingOption = {
  numberOfVotes: number;
  option: string;
};

export class Voting {
  private _votingOptions: VotingOption[] = [];
  public details: string;

  constructor(details: string) {
    this.details = details;
  }

  addVotingOption(votingOption: VotingOption): void {
    this._votingOptions.push(votingOption);
  }

  vote(voteIndex: number): void {
    if (!this._votingOptions[voteIndex]) return;
    this._votingOptions[voteIndex].numberOfVotes += 1;
  }

  public get votingOptions(): VotingOption[] {
    return this._votingOptions;
  }
}

export class VotingApp {
  private _votings: Voting[];

  constructor() {
    this._votings = [];
  }

  addVotingPool(voting: Voting): void {
    this._votings.push(voting);
  }

  showVoting(): void {
    for (const voting of this._votings) {
      console.log(voting.details);
      for (const votingOption of voting.votingOptions) {
        console.log(`${votingOption.option}: ${votingOption.numberOfVotes}`);
      }
      console.log('##############\n');
    }
  }
}

const voting1 = new Voting('Qual sua linguagem favorita?');
voting1.addVotingOption({ option: 'Python', numberOfVotes: 0 });
voting1.addVotingOption({ option: 'Javascript', numberOfVotes: 0 });
voting1.addVotingOption({ option: 'Typescript', numberOfVotes: 0 });

voting1.vote(0);
voting1.vote(0);
voting1.vote(0);
voting1.vote(2);
voting1.vote(2);
voting1.vote(2);
voting1.vote(2);
voting1.vote(2);
voting1.vote(1);
voting1.vote(1);
voting1.vote(1);
voting1.vote(1);

const votingApp = new VotingApp();
votingApp.addVotingPool(voting1);
votingApp.showVoting();
