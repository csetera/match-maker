<template>
  <div id="app">
      <component :is="componentName" v-bind="componentProps" v-on:generate="generateLineups" /> 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MatchGenerator from '@/services/MatchGenerator';
import MatchSelectionView from '@/views/MatchSelectionView.vue';
import Round from '@/models/Round';
import UserEntryView from '@/views/UserEntryView.vue';

enum State {
  MatchSelection,
  UserEntry,
}

@Component({
  components: {
    MatchSelectionView,
    UserEntryView,
  },
})
export default class App extends Vue {
  private state = State.UserEntry;
  private rounds!: Round[];

  public get componentName(): string {
    switch (this.state) {
      case State.MatchSelection:
        return 'MatchSelectionView';

      default:
        return 'UserEntryView';
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  public get componentProps(): object {
    switch (this.state) {
      case State.MatchSelection:
        return { rounds: this.rounds };

      default: 
        return {};
    }
  }

  public generateLineups(names: string): void {
    this.rounds = new MatchGenerator(names.split(/\r?\n/)).generateLineups();
    this.state = State.MatchSelection;
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
