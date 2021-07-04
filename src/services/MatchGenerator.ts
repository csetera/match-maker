import Matchup from '@/models/Matchup';
import Pair from '@/models/Pair';
import Player from '@/models/Player';
import Round from '@/models/Round';
import { k_combinations } from '@/utils/combinations';

/**
 * Class provides generation of a set of matches based on the
 * provided set of player names.
 */
export default class MatchGenerator {
    constructor(public players: Array<string>) { }

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

        for (let i = 0; i < this.players.length; i++) {
            for (let j = i + 1; j < this.players.length; j++) {
                const player1 = new Player(i + 1, this.players[i]);
                const player2 = new Player(j + 1, this.players[j]);
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
        // Generate the potential matchups, sorted by rank difference
        const matchesPerRound = Math.floor(this.players.length / 4);
        const matchups = this.generateMatchups().sort((matchup1, matchup2) => {
            return matchup1.combinedRankDifference - matchup2.combinedRankDifference;
        });

        // To avoid blowing up the number of combinations, limit the
        // matchups to be considered to a reasonable number
        const slicedMatchups = matchups.slice(0, Math.min(matchups.length, 250));
        const combinations = k_combinations(slicedMatchups, matchesPerRound);
        return combinations
            .map((matches) => {
                return new Round(matches)
            })
            .filter((round) => {
                return !round.hasMatchupOverlap();
            });
    }
}
