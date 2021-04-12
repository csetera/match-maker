import Pair from './Pair';

export default class Matchup {
    constructor(public pair1: Pair, public pair2: Pair) { }

    public get combinedRankDifference(): number {
        return Math.abs(this.pair1.combinedRank - this.pair2.combinedRank);
    }

    public hasOverlap(otherMatchup: Matchup): boolean {
        return this.pair1.hasOverlap(otherMatchup.pair1) || 
            this.pair1.hasOverlap(otherMatchup.pair2) ||
            this.pair2.hasOverlap(otherMatchup.pair1) || 
            this.pair2.hasOverlap(otherMatchup.pair2);
    }

    public toString(): string {
        return `[pair1=${this.pair1}] vs [pair2=${this.pair2}] [rankDifference=${this.combinedRankDifference}]`;
    }
}