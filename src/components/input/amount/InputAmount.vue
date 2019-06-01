<template>
  <v-layout justify-center>
    <v-flex xs12 sm8 md6>
      <v-text-field
          label="Amount"
          type="number"
          prefix="¥"
      ></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class InputAmount extends Vue {
  }
</script>

<style scoped>

</style>
