import Player from './Player';

export default class Pair {
    constructor(public player1: Player, public player2: Player) {}

    public hasOverlap(other: Pair): boolean {
        const otherPlayer1 = other.player1;
        const otherPlayer2 = other.player2;

        return (otherPlayer1.rank == this.player1.rank) ||
            (otherPlayer1.rank == this.player2.rank) ||
            (otherPlayer2.rank == this.player1.rank) ||
            (otherPlayer2.rank == this.player2.rank);
    }

    public get combinedRank(): number {
        return this.player1.rank + this.player2.rank;
    }

    public toString(): string {
        return `[player1=${this.player1}] - [player2=${this.player2}]; [combinedRank = ${this.combinedRank}]`;
    }
}