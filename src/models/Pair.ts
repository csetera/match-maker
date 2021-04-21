import Player from './Player';

export default class Pair {
    public _players: Player[];

    constructor(player1: Player, player2: Player) {
        this._players = [
            player1,
            player2
        ];
    }

    public get players(): Player[] {
        return this._players;
    }

    public hasOverlap(other: Pair): boolean {
        for (let otherIndex = 0; otherIndex < 2; otherIndex++) {
            for (let myIndex = 0; myIndex < 2; myIndex++) {
                if (this._players[myIndex].rank === other.players[otherIndex].rank) {
                    return true;
                }
            }
        }

        return false;
    }

    public get combinedRank(): number {
        return this._players[0].rank + this._players[1].rank;
    }

    public toString(): string {
        return `[player1=${this._players[0]}] - [player2=${this._players[1]}]; [combinedRank = ${this.combinedRank}]`;
    }
}