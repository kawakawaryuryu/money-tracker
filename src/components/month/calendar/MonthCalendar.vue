<template>
  <v-container>
    <v-sheet height=250>
      <v-calendar
        :show-month-on-first="false"
      ></v-calendar>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
export default class MonthCalendar extends Vue {}
</script>

<style scoped>
</style>
