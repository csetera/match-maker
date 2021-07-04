import Matchup from './Matchup';

export default class Round {
    constructor(public matchups: Matchup[]) { }
    
    public hasMatchupOverlap(): boolean {
        for (let i = 0; i < this.matchups.length; i++) {
            for (let j = i + 1; j < this.matchups.length; j++) {
                const matchup1 = this.matchups[i];
                const matchup2 = this.matchups[j];

                if (matchup1.hasOverlap(matchup2)) {
                    return true;
                }
            }
        }

        return false;
    }

    public get totalRankDifference(): number {
        return this.matchups.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.combinedRankDifference
        }, 0);
    }
}
