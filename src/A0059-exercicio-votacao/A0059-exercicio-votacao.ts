type VotingOption = {
  numberOfVotes: number;
  option: string;
};

export class Voting {
  private _votingOptions: VotingOption[] = [];

  constructor(public details: string) {}

  addVotingOption(votingOption: VotingOption): void {
    this._votingOptions.push(votingOption);
  }

  vote(votingIndex: number): void {
    if (!this._votingOptions[votingIndex]) return;
    this._votingOptions[votingIndex].numberOfVotes += 1;
  }

  get votingOptions(): VotingOption[] {
    return this._votingOptions;
  }
}

export class VotingApp {
  private votings: Voting[] = [];

  addVoting(voting: Voting): void {
    this.votings.push(voting);
  }

  showVoting(): void {
    for (const voting of this.votings) {
      console.log(voting.details);
      for (const votingOption of voting.votingOptions) {
        console.log(`${votingOption.option} ${votingOption.numberOfVotes}`);
      }
    }
  }
}

const voting1 = new Voting('Qual a sua linguagem de programação favorita?');
voting1.addVotingOption({ option: 'Python', numberOfVotes: 0 });
voting1.addVotingOption({ option: 'JavaScript', numberOfVotes: 0 });
voting1.addVotingOption({ option: 'TypeScript', numberOfVotes: 0 });

voting1.vote(1);
voting1.vote(1);
voting1.vote(1);

const votingApp = new VotingApp();
votingApp.addVoting(voting1);

votingApp.showVoting();
