<template>
  <v-form>
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 sm8 md6>
          <v-text-field
              label="Amount"
              type="number"
              prefix="¥"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm8 md6>
          <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
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
            <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm8 md6>
          <v-text-field
              label="Content"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm8 md6>
          <v-btn>Save</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Input extends Vue {
    private date = new Date().toISOString().substr(0, 10);
    private menu: boolean = false;
  }
</script>

<style scoped>

</style>
