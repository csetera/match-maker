<template>
  <div class="user-entry">
    <h2>Player Entry</h2>
    <b-form-textarea id="textarea" v-model="names" placeholder="Enter one player name per line..." rows="8" max-rows="12" />
    <br/>
    <b-button @click="onGenerate" :disabled="disableGenerateButton">Generate Lineups...</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class UserEntryView extends Vue {
  private names = '';
  
  created(): void {
    const storedNames = localStorage.getItem('previousPlayers');
    this.names = storedNames ? storedNames.split('|').join('\n') : '';
  }

  public onGenerate(): void {
    localStorage.setItem('previousPlayers', this.playersParam);
    this.$router.push({
      name: 'select-matches',
      params: {
        players: this.playersParam
      }
    })
  }

  get disableGenerateButton(): boolean {
    const parsedNames = this.parsedNames
    const validNumber = (parsedNames.length > 0) && ((parsedNames.length % 4) == 0);
    return !validNumber;
  }

  get parsedNames(): string[] {
    return this.names.split(/\r?\n/).filter((name) => {
      return name.trim().length > 0;
    })
  }

  get playersParam(): string {
    return this.parsedNames.join("|");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
