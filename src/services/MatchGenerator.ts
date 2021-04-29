import Matchup from '@/models/Matchup';
import Pair from '@/models/Pair';
import Player from '@/models/Player';
import Round from '@/models/Round';

/**
 * Class provides generation of a set of matches based on the
 * provided set of player names.
 */
export default class MatchGenerator {
    constructor(public names: Array<string>) { }

    /**
     * Generate potential lineups
     * 
     * @returns 
     */
    public generateLineups(): Round[] {
        return this.generateRounds().sort((round1, round2) => {
            return round1.totalRankDifference - round2.totalRankDifference;
        });
    }

    /**
     * Generate all potential pairing matchups
     * 
     * @returns 
     */
    private generateMatchups(): Matchup[] {
        const matchups = [] as Array<Matchup>;

        const pairs = this.generatePairs();
        for (let i = 0; i < pairs.length; i++) {
            for (let j = i + 1; j < pairs.length; j++) {
                const pair1 = pairs[i];
                const pair2 = pairs[j];

                if (!pair1.hasOverlap(pair2)) {
                    matchups.push(new Matchup(pair1, pair2));
                }
            }
        }

        return matchups;
    }

    /**
     * Generate all potential player pairings.
     * 
     * @returns 
     */
    private generatePairs(): Pair[] {
        const pairs = [] as Array<Pair>;

        for (let i = 0; i < 8; i++) {
            for (let j = i + 1; j < 8; j++) {
                const player1 = new Player(i + 1, this.names[i]);
                const player2 = new Player(j + 1, this.names[j]);
                pairs.push(new Pair(player1, player2));
            }
        }

        return pairs;
    }

    /**
     * Generate all potential rounds of matchups.
     * 
     * @returns 
     */
    private generateRounds(): Round[] {
        const rounds = [] as Array<Round>;

        const matchups = this.generateMatchups();
        for (let i = 0; i < matchups.length; i++) {
            for (let j = i + 1; j < matchups.length; j++) {
                const matchup1 = matchups[i];
                const matchup2 = matchups[j];

                if (!matchup1.hasOverlap(matchup2)) {
                    rounds.push(new Round(matchup1, matchup2));
                }
            }
        }

        return rounds;
    }
}
