<template>
  <v-layout justify-center>
    <v-flex xs12 sm8 md6>
      <v-menu
          v-model="menu"
          :close-on-content-click="false"
          lazy
          transition="scale-transition"
          full-width
      >
        <template v-slot:activator="{ on }">
          <v-text-field
              v-model="date"
              label="Date"
              prepend-inner-icon="event"
              readonly
              v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
            v-model="date"
            @input="menu = false"
        ></v-date-picker>
      </v-menu>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class InputDate extends Vue {
    private date = new Date().toISOString().substr(0, 10);
    private menu: boolean = false;

  }
</script>

<style scoped>

</style>
