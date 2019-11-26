<template>
  <div>
    <router-view></router-view>
    <v-bottom-nav :value="true" fixed color="transparent">
      <v-btn color="teal" text value="top" to="/top">
        <span>Top</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn color="teal" text value="result" to="/result">
        <span>Result</span>
        <v-icon>report</v-icon>
      </v-btn>
      <v-btn
        color="teal"
        text
        active-class
        value="input"
        @click.stop="openDialog()"
      >
        <span>Input</span>
        <v-icon>input</v-icon>
      </v-btn>
      <v-btn color="teal" text value="calendar" to="/calendar">
        <span>Calendar</span>
        <v-icon>calendar_today</v-icon>
      </v-btn>
      <v-btn color="teal" text value="detail" to="/detail">
        <span>Detail</span>
        <v-icon>details</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { OPEN_INPUT_DIALOG } from '@/mutation-types';

@Component
export default class Sp extends Vue {
  public openDialog() {
    this.$store.commit(OPEN_INPUT_DIALOG);
  }
}
</script>

<style scoped></style>
