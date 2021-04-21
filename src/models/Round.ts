import Matchup from './Matchup';

export default class Round {
    private _matchups: Matchup[];

    constructor(matchup1: Matchup, matchup2: Matchup) {
        this._matchups = [
            matchup1,
            matchup2
        ];
    }

    public get matchups(): Matchup[] {
        return this._matchups;
    }
    
    public get totalRankDifference(): number {
        return this._matchups[0].combinedRankDifference + this._matchups[1].combinedRankDifference;
    }
}