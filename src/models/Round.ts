import Matchup from './Matchup';

export default class Round {
    constructor(public matchup1: Matchup, public matchup2: Matchup) {}

    public get totalRankDifference(): number {
        return this.matchup1.combinedRankDifference + this.matchup2.combinedRankDifference;
    }
}