<template>
  <div class="user-entry">
    <b-form-textarea id="textarea" v-model="names" placeholder="Enter names..." rows="8" max-rows="8" />
    <b-button @click="generateLineups">Generate Lineups</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Matchup from '@/models/Matchup';
import Pair from '@/models/Pair';
import Player from '@/models/Player';
import Round from '@/models/Round';

@Component
export default class UserEntry extends Vue {
  private names = '';

  public generateLineups(): void {
    const rounds = this.generateRounds().sort((round1, round2) => {
      return round1.totalRankDifference - round2.totalRankDifference;
    });

    rounds.forEach((round) => {
      console.log(`##################  ${round.totalRankDifference}  ###########################`);
      this.writeMatchup(round.matchup1);
      console.log("And");
      this.writeMatchup(round.matchup2);
      console.log('##################################################');
    });
  }

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

  private generatePairs(): Pair[] {
    const nameArray = this.names.split(/\r?\n/);
    const pairs = [] as Array<Pair>;

    for (let i = 0; i < 8; i++) {
      for (let j = i + 1; j < 8; j++) {
        const player1 = new Player(i + 1, nameArray[i]);
        const player2 = new Player(j + 1, nameArray[j]);
        pairs.push(new Pair(player1, player2));
      }
    }

    return pairs;
  }

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

  private writeMatchup(matchup: Matchup) {
    const pair1 = matchup.pair1;
    const pair2 = matchup.pair2;

    console.log(`${pair1.player1.name}/${pair1.player2.name} vs ${pair2.player1.name}/${pair2.player2.name}`)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
