<template>
  <div>
    <router-view></router-view>
    <v-bottom-nav
        :active.sync="bottomNav"
        :value="true"
        absolute
        color="transparent"
    >
      <v-btn
          color="teal"
          flat
          value="top"
          to="/top"
      >
        <span>Top</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn
          color="teal"
          flat
          value="result"
          to="/result"
      >
        <span>Result</span>
        <v-icon>report</v-icon>
      </v-btn>
      <v-btn
          color="teal"
          flat
          value="input"
          to="/input"
      >
        <span>Input</span>
        <v-icon>input</v-icon>
      </v-btn>
      <v-btn
          color="teal"
          flat
          value="calendar"
          to="/calendar"
      >
        <span>Calendar</span>
        <v-icon>calendar_today</v-icon>
      </v-btn>
      <v-btn
          color="teal"
          flat
          value="detail"
          to="/detail"
      >
        <span>Detail</span>
        <v-icon>details</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Sp extends Vue {
    private bottomNav = '';
  }
</script>

<style scoped>

</style>
