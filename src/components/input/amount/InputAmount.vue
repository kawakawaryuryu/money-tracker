<template>
  <v-row justify="center">
    <v-col :xs="12" :sm="8" :md="6">
      <v-text-field label="Amount" type="number" prefix="¥"></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class InputAmount extends Vue {}
</script>

<style scoped></style>
