<template>
  <div>
    <b-form-textarea id="textarea" v-model="text" rows="20" max-rows="8" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Matchup from '@/models/Matchup';
import MatchGenerator from '@/services/MatchGenerator';
import Round from '@/models/Round';

@Component
export default class MatchSelectionView extends Vue {
  // PROPERTIES
  @Prop(String)
  public readonly players!: string;

  get rounds(): Round[] {
    const nameArray = this.players.split('|');
    return new MatchGenerator(nameArray).generateLineups();
  }

  public get text(): string {
    if (!this.rounds) {
      return "UNSET";
    }

    let _text = '';
    this.rounds.forEach((round) => {
      _text += '\n##################################################\n';

      for (let i = 0; i < round.matchups.length; i++) {
        if (i != 0) {
        _text += "\nAnd\n";
        }

        _text += this.writeMatchup(round.matchups[i]);
      }
    });

    return _text;
  }

  private writeMatchup(matchup: Matchup): string {
    const pair1 = matchup.pairs[0];
    const pair2 = matchup.pairs[1];

    return `${pair1.players[0].name}/${pair1.players[1].name} vs ${pair2.players[0].name}/${pair2.players[1].name}`;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
