import Pair from './Pair';

export default class Matchup {
    public _pairs: Pair[];

    constructor(pair1: Pair, pair2: Pair) { 
        this._pairs = [
            pair1,
            pair2
        ]
    }

    public get combinedRankDifference(): number {
        return Math.abs(this._pairs[0].combinedRank - this._pairs[1].combinedRank);
    }

    public get pairs(): Pair[] {
        return this._pairs;
    }

    public hasOverlap(otherMatchup: Matchup): boolean {
        for (let otherIndex = 0; otherIndex < 2; otherIndex++) {
            for (let myIndex = 0; myIndex < 2; myIndex++) {
                if (this._pairs[myIndex].hasOverlap(otherMatchup.pairs[otherIndex])) {
                    return true;
                }
            }
        }

        return false;
    }

    public toString(): string {
        return `[pair1=${this._pairs[0]}] vs [pair2=${this._pairs[1]}] [rankDifference=${this.combinedRankDifference}]`;
    }
}