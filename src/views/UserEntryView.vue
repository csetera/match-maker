<template>
  <div class="user-entry">
    <b-form-textarea id="textarea" v-model="names" placeholder="Enter names..." rows="8" max-rows="8" />
    <b-button @click="onGenerate">Generate Lineups</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import Matchup from '@/models/Matchup';
import Pair from '@/models/Pair';
import Player from '@/models/Player';
import Round from '@/models/Round';

@Component
export default class UserEntryView extends Vue {
  private names = '';
  
  @Emit('generate')
  public onGenerate(): string {
    return this.names
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
